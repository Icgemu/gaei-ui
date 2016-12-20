import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {activeLink} from '../reducers/index';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onLinkClick(e,item){
      this.props.onLinkClick(item.id);
    }
    render() {

      let lis = this.props.links.map((item,i)=>{
        let active = item.id === this.props.currentActive.id;
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
    onLinkClick: (id) => {
      dispatch(activeLink(id))
    }
  }
}
const mapStateToProps = (state,ownProps) => {
  return {
    links:state.links.links,
    currentActive:state.links.currentActive
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
// export default Navbar
