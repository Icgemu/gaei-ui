import React from 'react';
import gaei from './gaei.png';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div className="bjui-navbar-header">
            <button type="button" className="bjui-navbar-toggle btn-default" data-toggle="collapse" data-target="#bjui-navbar-collapse">
              <i className="fa fa-bars"></i>
            </button>
            <a className="bjui-navbar-logo" href="#"><img src={gaei} style={{height:'40px'}}/></a>
        </div>
      );
    }
}

export default Logo;
