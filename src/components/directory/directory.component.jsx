import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import directoryReducer from '../../redux/directory/directory.reducer';
import {connect} from 'react-redux';
import { selectorDirectorySections } from '../../redux/directory/directory.selectors';
import {DirectoryMenu} from './directory.styles'; 

const Directory = ({sections}) => (
    <DirectoryMenu>
         {
              sections.map(({id,...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps}/>
              ))
          }
    </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectorDirectorySections
})


export default connect(mapStateToProps)(Directory);