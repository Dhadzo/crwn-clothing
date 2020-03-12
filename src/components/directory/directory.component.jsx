import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import directoryReducer from '../../redux/directory/directory.reducer';
import {connect} from 'react-redux';
import { selectorDirectorySections } from '../../redux/directory/directory.selectors';
 

const Directory = ({sections}) => (
      <div className="directory-menu">
          {
              sections.map(({id,...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps}/>
              ))
          }
      </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectorDirectorySections
})


export default connect(mapStateToProps)(Directory);