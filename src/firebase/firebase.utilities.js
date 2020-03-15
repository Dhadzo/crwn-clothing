import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD0S_hmNvln3DWuR3R7n2PU7TJsDEBS3ME",
        authDomain: "crwn-clothing-35bd6.firebaseapp.com",
        databaseURL: "https://crwn-clothing-35bd6.firebaseio.com",
        projectId: "crwn-clothing-35bd6",
        storageBucket: "crwn-clothing-35bd6.appspot.com",
        messagingSenderId: "687073522910",
        appId: "1:687073522910:web:d0b359f6ceb3f73388fe4f",
        measurementId: "G-SSMD9FWBW1"
}; 

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();
   if(!snapShot.exists){
       const {displayName, email} = userAuth; 
       const createdAt = new Date();
       console.log(email + displayName);
       try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData 
          })
       }catch(error) {
            console.log('error creating user', error.message);
       }
       
   }
   return userRef;
}

export const  addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch  = firestore.batch();
    objectsToAdd.forEach(obj => {
        const  newDocRef  =  collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{});
};



firebase.initializeApp(config);
    
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;