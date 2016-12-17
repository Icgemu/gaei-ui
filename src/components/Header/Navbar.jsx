import React from 'react';
import { Link } from 'react-router';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-hnav">
            <button type="button" className="btn-default bjui-hnav-more-left" title="导航菜单左移"><i className="fa fa-angle-double-left"></i></button>
            <div id="bjui-hnav-navbar-box">
                <ul id="bjui-hnav-navbar">
                    <li className="active">
                      <Link to="/t1"><i className="fa fa-check-square-o"></i> 表单元素1</Link>
                    </li>
                    <li>
                      <Link to="/t2"><i className="fa fa-check-square-o"></i> 表单元素2</Link>
                    </li>
                </ul>
            </div>
            <button type="button" className="btn-default bjui-hnav-more-right" title="导航菜单右移"><i className="fa fa-angle-double-right"></i></button>
        </div>
      );
    }
}

export default Navbar;
