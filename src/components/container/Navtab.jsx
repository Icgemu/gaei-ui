import React from 'react';

class Navtab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      let {width,height} = this.props;
      return (
        <div id="bjui-navtab" className="tabsPage" style={{width:width+'px',height:height+'px'}}>
            <div className="tabsPageHeader">
                <div className="tabsPageHeaderContent">
                    <ul className="navtab-tab nav nav-tabs">
                        <li data-url="index_layout.html" data-faicon="home">
                          <a href="javascript:;">
                          <span><i className="fa fa-home"></i> {this.props.title}</span>
                          </a>
                        </li>
                    </ul>
                </div>
                <div className="tabsLeft"><i className="fa fa-angle-double-left"></i></div>
                <div className="tabsRight"><i className="fa fa-angle-double-right"></i></div>
                <div className="tabsMore"><i className="fa fa-angle-double-down"></i></div>
            </div>
            <ul className="tabsMoreList">
                <li><a href="javascript:;">{this.props.title}</a></li>
            </ul>
            <div className="navtab-panel tabsPageContent" style={{width:width+'px',height:(height-26)+'px'}}>
                <div className="navtabPage unitBox">
                      {this.props.page}
                </div>
            </div>
        </div>
      );
    }
}

export default Navtab;
