import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <nav id="bjui-navbar-collapse">
            <ul className="bjui-navbar-right">
                <li className="datetime"><div><span id="bjui-date"></span> <span id="bjui-clock"></span></div></li>
                <li><a href="#">消息 <span className="badge">4</span></a></li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">我的账户 <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="changepwd.html" data-toggle="dialog" data-id="changepwd_page" data-mask="true" data-width="400" data-height="260">&nbsp;<span class="glyphicon glyphicon-lock"></span> 修改密码&nbsp;</a></li>
                        <li><a href="#">&nbsp;<span className="glyphicon glyphicon-user"></span> 我的资料</a></li>
                        <li className="divider"></li>
                        <li><a href="login.html" className="red">&nbsp;<span className="glyphicon glyphicon-off"></span> 注销登陆</a></li>
                    </ul>
                </li>
                <li><a href="index_tree.html" title="切换为树状导航(宽版)" style={{backgroundColor:'#ff7b61'}}>树状导航栏(宽版)</a></li>
                <li className="dropdown"><a href="#" className="dropdown-toggle theme blue" data-toggle="dropdown" title="切换皮肤"><i className="fa fa-tree"></i></a>
                    <ul className="dropdown-menu" role="menu" id="bjui-themes">
                        <li><a href="javascript:;" className="theme_default" data-toggle="theme" data-theme="default">&nbsp;<i className="fa fa-tree"></i> 黑白分明&nbsp;&nbsp;</a></li>
                        <li><a href="javascript:;" className="theme_orange" data-toggle="theme" data-theme="orange">&nbsp;<i className="fa fa-tree"></i> 橘子红了</a></li>
                        <li><a href="javascript:;" className="theme_purple" data-toggle="theme" data-theme="purple">&nbsp;<i className="fa fa-tree"></i> 紫罗兰</a></li>
                        <li className="active"><a href="javascript:;" className="theme_blue" data-toggle="theme" data-theme="blue">&nbsp;<i className="fa fa-tree"></i> 天空蓝</a></li>
                        <li><a href="javascript:;" className="theme_green" data-toggle="theme" data-theme="green">&nbsp;<i className="fa fa-tree"></i> 绿草如茵</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
      );
    }
}

export default Nav;
