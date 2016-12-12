import React from 'react';

class Navtab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-navtab" className="tabsPage" style={{width:'500px'}}>
            <div className="tabsPageHeader">
                <div className="tabsPageHeaderContent">
                    <ul className="navtab-tab nav nav-tabs">
                        <li data-url="index_layout.html" data-faicon="home"><a href="javascript:;"><span><i className="fa fa-home"></i> #maintab#</span></a></li>
                    </ul>
                </div>
                <div className="tabsLeft"><i className="fa fa-angle-double-left"></i></div>
                <div className="tabsRight"><i className="fa fa-angle-double-right"></i></div>
                <div className="tabsMore"><i className="fa fa-angle-double-down"></i></div>
            </div>
            <ul className="tabsMoreList">
                <li><a href="javascript:;">#maintab#</a></li>
            </ul>
            <div className="navtab-panel tabsPageContent">
                <div className="navtabPage unitBox">
                    <div className="bjui-pageContent" style={{background:'#FFF'}}>
                        Loading...
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Navtab;
