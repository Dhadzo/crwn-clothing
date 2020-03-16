import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection-page.containiner';


class ShopPage extends React.Component {

   componentDidMount(){
      const {fetchCollectionsStartAsync} = this.props;
      fetchCollectionsStartAsync();
      
   }
   render(){
       const {match} = this.props;
       return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />      
            </div>
       );
   }
}

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync:() =>  dispatch(fetchCollectionsStartAsync())
});


export default connect(null, mapDispatchToProps)(ShopPage);