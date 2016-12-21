import { connect } from 'react-redux';
import Container from './Container';
import {addTab,delTab,activeTab} from '../reducers/index';

const mapStateToProps = (state,ownProps) => {
  let ctabs = state.tabs;
  return {
    tabs: [...ctabs]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onDelete:(id)=>{
      dispatch(delTab(id))
    }
  }
}

const StatefulContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default StatefulContainer
