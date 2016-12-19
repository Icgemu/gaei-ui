import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {addTab} from '../reducers/index';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[
          {id:"header1",path:"/t1",title:"导航1"},
          {id:"header2",path:"/t2",title:"导航2"}
        ],currentActive:{id:"header1",path:"/t1",title:"导航1"}}
    }
    onLinkClick(e,item){
      this.props.onLinkClick(item);
      this.setState({currentActive:item});
    }
    render() {

      let lis = this.state.links.map((item,i)=>{
        let active = item.id === this.state.currentActive.id;
        return (
          <li className={active?'active':""}>
            <Link to={item.path} onClick={e=>{this.onLinkClick(e,item)}}><i className="fa fa-check-square-o"></i> {item.title}</Link>
          </li>
        )
      })
      return (
        <div id="bjui-hnav">
            <button type="button" className="btn-default bjui-hnav-more-left" title="导航菜单左移"><i className="fa fa-angle-double-left"></i></button>
            <div id="bjui-hnav-navbar-box">
                <ul id="bjui-hnav-navbar">
                    {lis}
                </ul>
            </div>
            <button type="button" className="btn-default bjui-hnav-more-right" title="导航菜单右移"><i className="fa fa-angle-double-right"></i></button>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (link) => {
      dispatch(addTab(link))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
