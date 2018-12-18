import React from 'react';
import './infoColumn.less';

class InfoColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="info-column">
        <section className="search">
          <div className="title">information</div>
          <div className="container">

          </div>  
        </section>
        <section className="tag">
          <div className="title">tag</div>
          <div className="container">
            <ul className="list">
              <li className="item">code</li>
              <li className="item">vg</li>
            </ul>
          </div>
        </section>
        
      </div>
    )
  }
}

export default InfoColumn;