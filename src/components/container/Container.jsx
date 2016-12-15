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
      let {sidebar,height,width} = this.props;
      return (
        <div id="bjui-container" className="clearfix"
          style={{height:height+'px',width:width+'px'}}>
          <Leftbar width={sidebar} height={height}>{this.props.left}</Leftbar>
          <Navtab  width={width-sidebar-6} height={height} page={this.props.page} title={this.props.title}>
          </Navtab>
        </div>
      );
    }
}

export default Container;
