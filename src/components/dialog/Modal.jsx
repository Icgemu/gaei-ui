
import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

class Modal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  maximize(e){
    this.props.maximize(e);
  }
  minimize(e){
    this.props.minimize(e);
  }
  close(e){
    this.props.close(e);
  }
  restore(e){
    this.props.restore(e);
  }
  render() {
    let {
      id,
      title,
      component
    } = this.props;
  return (
    <div className="bjui-dialog bjui-dialog-container" style={{top:'150px',left:'300px'}}>
        <div className="dialogHeader" onselectstart="return false;" oncopy="return false;" onpaste="return false;" oncut="return false;">
            <a className="close" onClick={e => {
                this.close(id)
            }} title="关闭">
                <i className="fa fa-times-circle"></i>
            </a>
            <a className="maximize" onClick={e => {
                this.maximize(id)
            }} title="最大化">
                <i className="fa fa-plus-circle"></i>
            </a>
            <a className="restore" onClick={e => {
                this.restore(id)
            }} title="恢复">
                <i className="fa fa-history"></i>
            </a>
            <a className="minimize" onClick={e => {
                this.minimize(id)
            }} title="最小化">
                <i className="fa fa-minus-circle"></i>
            </a>
            <h1>
                <span>
                    <i className="fa fa-th-large"></i>
                </span>
                <span className="title">{title}</span>
            </h1>
        </div>
        <div className="dialogContent unitBox">{this.props.component}</div>
        <div className="resizable_h_l" tar="nw"></div>
        <div className="resizable_h_r" tar="ne"></div>
        <div className="resizable_h_c" tar="n"></div>
        <div className="resizable_c_l" tar="w" style={{height:'100%'}}></div>
        <div className="resizable_c_r" tar="e" style={{height:'100%'}}></div>
        <div className="resizable_f_l" tar="sw"></div>
        <div className="resizable_f_r" tar="se"></div>
        <div className="resizable_f_c" tar="s"></div>
    </div>
)
  }
}


const mapStateToProps = (state,ownProps) => {
  let ctabs = state.tabs;
  return {
    // tabs: [...ctabs]
  }
}



const closeModal = (id) => {
  return {
    type: 'CLOSE_MODAL',
    id
  }
}

const restoreModal = (id) => {
  return {
    type: 'RESTORE_MODAL',
    id
  }
}

const minimizeModal = (id) => {
  return {
    type: 'MINIMIZE_MODAL',
    id
  }
}
const maximizeModal = (id) => {
  return {
    type: 'MAXIMIZE_MODAL',
    id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    maximize:(id)=>{
      dispatch(maximizeModal(id));
    },
    minimize:(id)=>{
      dispatch(minimizeModal(id));
    },
    close:(id)=>{
      dispatch(closeModal(id));
    },
    restore:(id)=>{
      dispatch(restoreModal(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
