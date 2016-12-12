import React from 'react';

class Leftbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-leftside">
            <div id="bjui-sidebar-s">
                <div className="collapse"></div>
            </div>
            <div id="bjui-sidebar">
                <div className="toggleCollapse"><h2><i className="fa fa-bars"></i> 导航栏 <i className="fa fa-bars"></i></h2><a href="javascript:;" className="lock"><i className="fa fa-lock"></i></a></div>
                <div className="panel-group panel-main" data-toggle="accordion" id="bjui-accordionmenu">
                </div>
            </div>
        </div>
      );
    }
}

export default Leftbar;
