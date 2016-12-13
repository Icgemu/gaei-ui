import React from 'react';
import Leftbar from './Leftbar';
import Navtab from './Navtab';
import Form1 from '../pages/Form1';
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-container" className="clearfix" style={{height:'500px'}}>
          <Leftbar/>
          <Navtab>
            <Form1/>
          </Navtab>
        </div>
      );
    }
}

export default Container;
