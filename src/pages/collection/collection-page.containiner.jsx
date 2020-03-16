import {connect} from 'react-redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner  
  )(CollectionPage);

export default CollectionPageContainer;
