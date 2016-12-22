import React from 'react';
// import Modal from './Modal';
import {connect} from 'react-redux';
import store from "../index/store"
// import "./alertmsg.css";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Alertmsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          top:-300,
          types           : {error:'error', info:'info', warn:'warn', success:'green', confirm:'confirm'},
          fas             : {error:'fa-times-circle', info:'fa-info-circle', warn:'fa-exclamation-circle', correct:'fa-check-circle', confirm:'fa-question-circle'}
        };
    }

    componentDidMount() {

      let interid = setInterval(()=> {
        if(this.state.top != 0){
          this.setState({top:this.state.top+2});
        }else{
          clearInterval(this.state.interid);
        }

      }, 2);

      this.setState({interid});
    }

    close(id) {

      let interid = setInterval(()=> {
        if(this.state.top != -300){
          this.setState({top:this.state.top-2});
        }else{
          clearInterval(this.state.interid);
          this.props.close(id);
        }

      }, 2);

      this.setState({interid});
    }


    render() {
        let cls = `btn btn-${this.props.type}`;
        let fa = `fa ${this.state.fas[this.props.type]}`;
        let btn = (
          <li>
            <button className={cls} onClick={e=>{this.props.callback?this.callback(e):"";this.close(this.props.id)}} type="button">确定</button>
          </li>
        )
        return (
          <div id="bjui-alertMsgBox" className="bjui-alert" style={{top:this.state.top+'px'}}>
              <div className="alertContent">
                  <div className={this.props.type}>
                      <div className="alertInner">
                          <h1>
                              <i className={fa}></i>{this.props.title}</h1>
                          <div className="msg">{this.props.msg}</div>
                      </div>
                      <div className="toolBar">
                          <ul>{btn}</ul>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

const addAlert = (option) => {
    let id = parseInt(Math.random() * 100000000000);
    option.id = id;
    return {type: 'ADD_ALERT_MSG', option}
}
const delAlert = (id) => {
    return {type: 'DEL_ALERT_MSG', id}
}

export const alertMsg = function(option) {
    store.dispatch(addAlert(option));
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: (id) => {
            dispatch(delAlert(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Alertmsg)
// export default Alertmsg
