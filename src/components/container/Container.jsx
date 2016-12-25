import React from 'react';
import Leftbar from './Leftbar';
import Navtab from './Navtab';
import {windowInfo} from '../reducers/index';
import styles from './container.scss'
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.onLinkClick = this.onLinkClick.bind(this);
    }

    componentDidMount() {
      this.resize();
      $(window).resize(this.resize.bind(this));
      // console.log("set Route:"+JSON.stringify(this.props.route))
      // this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this))
    }
    // routerWillLeave(nextLocation){
    //   console.log("current:"+JSON.stringify(this.props.location)+",next:"+JSON.stringify(nextLocation))
    // }
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
        // if(tabs[0].id !== 'home'){
        //   this.props.router.push('/');
        // }else{
        //     this.props.router.push(path);
        // }
        this.props.router.push(path);
      }
      this.props.onDelete(id);

      //this.props.activeTab(id);
    }

    // activeTab(e,item){
    //   let id = item.id;
    //   this.props.activeTab(id);
    // }

    render() {
      let {height,width,sidebar} = this.state;
      let ctabs = this.props.tabs;
      let lis = ctabs.map((item,i) =>{
        let span ;
        if(i !== 0){
          span = <span id={item.id} className={styles.close} onClick={e =>{this.delTab(e,item)}}>×</span>;
        }
        // if(item.active && item.path !== this.props.location.pathname){
        //   console.log("current:"+item.path+",location:"+this.props.location.pathname);
        //   this.props.router.push(item.path);
        // }
        let active = item.active?styles.active:''
        return (
          <li className={active}>
            <a href={`#${item.path}`}>
            <span><i className="fa fa-home"></i> {item.title}</span>
            </a>
            {span}
          </li>
        )
      });
      // containercls = `${styles.gaeiContainer} `
      return (
        <div className={styles.gaeiContainer}
          style={{height:height+'px',width:width+'px'}}>

          <Leftbar width={sidebar} height={height}>
            {this.props.left}
          </Leftbar>

          <div className={styles.navtab} style={{width:(width-sidebar-6)+'px',height:height+'px'}}>
              <div className={styles.tabsPageHeader}>
                  <div className={styles.tabsPageHeaderContent}>
                      <ul className={styles.navTabs}>
                          {lis}
                      </ul>
                  </div>
              </div>

              <Navtab  width={width-sidebar-6} height={height}>
                {this.props.children}
              </Navtab>
          </div>

        </div>
      );
    }
}

export default Container;
