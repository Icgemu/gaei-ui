import React from 'react';
import { connect } from 'react-redux';

class Taskbar extends React.Component {
    constructor(props) {
        super(props);
        this.setState({tabs:[]});
    }
    render() {
      if(this.props.tabs.length === 0){return null;}
      let lis = this.props.tabs.map(option=>{
        return (
          <li id = "task-test_dialog4" className = "selected" >
          <div className="taskbutton" onClick={e=>{this.props.addModal(option)}}>
              <span>
                  <i className="fa fa-th-large"></i>
              </span>
              <span className="title">{option.title}</span>
          </div>
          <div className = "close"  onClick={e=>{this.props.close(option.id)}}> <i className="fa fa-times-circle"></i> </div>
          </li>
        )
      })


        return (
            <div id="bjui-taskbar" style={{left:'0px',bottom:'0px'}}>
                <div className="taskbarContent">
                    <ul>
                      {lis}
                    </ul>
                </div>
                <div className="taskbarLeft taskbarLeftDisabled">
                    <i className="fa fa-angle-double-left"></i>
                </div>
                <div className="taskbarRight">
                    <i className="fa fa-angle-double-right"></i>
                </div>
            </div>
        )
    }
}

const addModal = (option) => {
  return {
    type: 'ADD_MODAL',
    option
  }
}

const closeMiniModal = (id) => {
  return {
    type: 'CLOSE_MINI_MODAL',
    id
  }
}

const mapStateToProps = (state, ownProps) => {
    let dialog = state.minDialog;
    return {
        tabs:[...dialog]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addModal: (option) => {
            dispatch(addModal(option));
            dispatch(closeMiniModal(option.id));
        },
        close: (id) => {
            dispatch(closeMiniModal(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Taskbar)
