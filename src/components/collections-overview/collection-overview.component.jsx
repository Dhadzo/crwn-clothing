import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import  CollectionPreview from '../collection-preview/collection-preview.component';
import  {selectCollectionForPreview}  from '../../redux/shop/shop.selectors';
import { CollecionsOverviewContainer } from './collections-overview.styles';


const CollectionOverview = ({collections}) => (
    <CollecionsOverviewContainer>
        {
           collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollecionsOverviewContainer>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
