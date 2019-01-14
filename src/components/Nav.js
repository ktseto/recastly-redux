import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';
  
var Nav = () => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <SearchContainer />
    </div>
  </nav>
);

export default Nav;
