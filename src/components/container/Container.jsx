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

    delTab(e,item){
      let id = item.id;
      let tabs = this.props.tabs.filter(t =>{return t.id != item.id});
      let actives = tabs.filter(t =>{return t.active});

      if(actives.length === 0){
        let path = tabs[tabs.length-1].path;
        if(tabs[0].id !== 'home'){
          this.props.router.push('/');
        }else{
            this.props.router.push(path);
        }
      }
      this.props.onDelete(id);

      //this.props.activeTab(id);
    }

    activeTab(e,item){
      let id = item.id;

      this.props.activeTab(id);
    }

    render() {
      let {height,width,sidebar} = this.state;
      let ctabs = this.props.tabs;
      let lis = ctabs.map((item,i) =>{
        let span ;
        if(i !== 0){
          span = <span id={item.id} className="close" onClick={e =>{this.delTab(e,item)}}>×</span>;
        }
        // if(item.active && item.path !== this.props.location.pathname){
        //   console.log("current:"+item.path+",location:"+this.props.location.pathname);
        //   this.props.router.push(item.path);
        // }
        return (
          <li className={item.active?'active':''}>
            <a href={`#${item.path}`}>
            <span onClick={e=>{this.activeTab(e,item)}}><i className="fa fa-home"></i> {item.title}</span>
            </a>
            {span}
          </li>
        )
      });

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
