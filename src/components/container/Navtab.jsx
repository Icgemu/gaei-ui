import React from 'react';

class Navtab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      let {width,height} = this.props;
      
      return (
        <div className="navtab-panel tabsPageContent" style={{width:width+'px',height:(height-26)+'px'}}>
            <div className="navtabPage unitBox">
                  {this.props.children}
            </div>
        </div>
      );
    }
}

export default Navtab;
