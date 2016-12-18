import React from 'react';
import Leftbar from './Leftbar';
import Navtab from './Navtab';
import {windowInfo} from '../reducers/index';
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.onLinkClick = this.onLinkClick.bind(this);
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
    // onLinkClick(link){
    //   let tabs = this.state.tabs;
    //   tabs.push(link);
    //   this.setState({tabs});
    // }
    render() {
      let {height,width,sidebar} = this.state;

      let lis = this.props.tabs?this.props.tabs.map((item,i) =>{
        return (
          <li data-url={item.url} data-faicon="home">
            <a href={`#${item.path}`}>
            <span><i className="fa fa-home"></i> {item.title}</span>
            </a>
            <span className="close">×</span>
          </li>
        )
      }):undefined;

      return (
        <div id="bjui-container" className="clearfix"
          style={{height:height+'px',width:width+'px'}}>

          <Leftbar width={sidebar} height={height}>
            {this.props.left && React.cloneElement(this.props.left, {
             onLinkClick:this.props.onLinkClick
            })}
          </Leftbar>

          <div id="bjui-navtab" className="tabsPage" style={{width:(width-sidebar-6)+'px',height:height+'px'}}>
              <div className="tabsPageHeader">
                  <div className="tabsPageHeaderContent">
                      <ul className="navtab-tab nav nav-tabs">
                          <li>
                            <a href="#/">
                            <span><i className="fa fa-home"></i> {this.props.title|| '首页'}</span>
                            </a>
                          </li>
                          {lis}
                      </ul>
                  </div>
                  <div className="tabsLeft"><i className="fa fa-angle-double-left"></i></div>
                  <div className="tabsRight"><i className="fa fa-angle-double-right"></i></div>
                  <div className="tabsMore"><i className="fa fa-angle-double-down"></i></div>
              </div>
              <ul className="tabsMoreList">
                  <li><a href="javascript:;"></a></li>
              </ul>
              <Navtab  width={width-sidebar-6} height={height}>
                {this.props.children}
              </Navtab>
          </div>

        </div>
      );
    }
}

export default Container;
