import React from 'react';
import TopHeader from '../Header/TopHeader';
import '../../../lib/B-JUI/BJUI/themes/css/style.css';
import '../../../lib/B-JUI/BJUI/themes/blue/core.css';
import './default.css';
import '../../../lib/B-JUI/BJUI/themes/css/FA/css/font-awesome.min.css';
import styles from './app.scss';
import Dialog from '../dialog/Dialog';
import Taskbar from '../dialog/Taskbar';
import Alertmsg from '../dialog/Alertmsg';
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

      let alerts = this.props.alerts.map(item=>{
        return (
          <Alertmsg {...item} />
        )
      });
      return (
        <div className={styles.window}>
          <TopHeader/>
          {this.props.children}
          <Taskbar/>
          {dialogs}
          {alerts}
        </div>
      );
    }
}

const mapStateToProps = (state,ownProps) => {
  let diaglog = state.dialog;
  let alerts = state.alerts;
  return {
    dialog: [...diaglog],
    alerts:[ ...alerts]
  }
}

export default connect(
  mapStateToProps
)(App)

// export default App;
