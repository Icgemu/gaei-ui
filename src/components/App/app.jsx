import React from 'react';
import TopHeader from '../Header/TopHeader';
import Footer from '../foot/Footer';
import '../../../lib/B-JUI/BJUI/themes/css/style.css';
import '../../../lib/B-JUI/BJUI/themes/blue/core.css';
import '../../../lib/B-JUI/BJUI/themes/css/FA/css/font-awesome.min.css';
import Dialog from '../dialog/Dialog';
import { connect } from 'react-redux';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      let dialogs = this.props.dialog.map(item=>{
        return (
          <Dialog option={item}/>
        )
      });
      return (
        <div id="bjui-window">
          <TopHeader/>
          {this.props.children}
          <Footer/>
          {dialogs}
        </div>
      );
    }
}

const mapStateToProps = (state,ownProps) => {
  let diaglog = state.dialog;
  return {
    dialog: [...diaglog]
  }
}

export default connect(
  mapStateToProps
)(App)

// export default App;
