import  {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import withSpinner from  '../with-spinner/with-spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
    )(CollectionOverview);

export default CollectionsOverviewContainer;
