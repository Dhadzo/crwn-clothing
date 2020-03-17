import {takeLatest, put, all, call} from "redux-saga/effects";
import UserActionTypes from './user.types';
import {auth, createUserProfileDocument, googleProvider, getCurrentUser} from '../../firebase/firebase.utilities';
import {
    signInSuccess, signInFailure,
    signOutFailure,signOutSuccess, createUserAccountFailure, createUserAccountSuccess
} 
from './user.action';


export function* getSnapshotFromUserAuth(userAuth){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
}

export function* signInWithGoogle() {
    
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
}
export function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
}

export function* isUserAuthenticated(){
  try {
      const userAuth = yield getCurrentUser();
      if(!userAuth) return;
      yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
      put(signInFailure(error));
  }
}

export function* isUserSignedOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        console.log('Sign Our Failure')
        put(signOutFailure(error))
    }
}
export function* createAccount({payload: {email, password, displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield createUserProfileDocument(user, {displayName});
        const userSnapshot = yield userRef.get();
        yield put(createUserAccountSuccess())
        yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
        
     }catch(error){
        yield put(createUserAccountFailure(error))
     }
}

export function* onGoogleSignInStart() {
   yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}
export  function* onSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, isUserSignedOut)
}
export function* onCreateUserAccount(){
    yield takeLatest(UserActionTypes.CREATE_USER_ACCOUNT_START, createAccount)
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart),
               call(onEmailSignInStart), 
               call(onCheckUserSession),
                call(onSignOut),
                call(onCreateUserAccount)
            ]);
}

   