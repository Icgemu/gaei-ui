import React from 'react';
import Leftbar from './Leftbar';
import Navtab from './Navtab';
import {windowInfo} from '../reducers/index';
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
          this.onLinkClick = this.onLinkClick.bind(this);
    }

    componentDidMount() {
      this.resize();

      $(window).resize(this.resize.bind(this));

    }

    resize(){
      let {ww,hh,th,fh} = windowInfo();
      let height = hh - th - fh -6;
      let width = ww;
      let sidebar = 200;

      this.setState({height,width,sidebar});
    }
    onLinkClick(title){
      this.setState({title});
    }
    render() {
      let {height,width,sidebar} = this.state;

      return (
        <div id="bjui-container" className="clearfix"
          style={{height:height+'px',width:width+'px'}}>
          <Leftbar width={sidebar} height={height}>
            {this.props.left && React.cloneElement(this.props.left, {
             onLinkClick:this.onLinkClick
            })}
          </Leftbar>
          <Navtab  width={width-sidebar-6} height={height} title={this.state.title|| '首页'}>
            {this.props.children}
          </Navtab>
        </div>
      );
    }
}

export default Container;
