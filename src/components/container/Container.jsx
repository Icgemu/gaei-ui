import React from 'react';
import Leftbar from './Leftbar';
import Navtab from './Navtab';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-container" className="clearfix" style={{height:'500px'}}>
          <Leftbar/>
          <Navtab/>
        </div>
      );
    }
}

export default Container;
