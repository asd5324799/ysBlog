import React from 'react';
import './header.less';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="left"><div className="logo"></div></div>
          <div className="right">
            <input type="text" placeholder="import document" />
            <div className="button">search</div>
          </div>
        </div>
      </header>
    )
  }

  onSelect() {

  }  
}

export default Header;