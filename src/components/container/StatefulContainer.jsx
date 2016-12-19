import { connect } from 'react-redux';
import Container from './Container';
import {addTab,delTab,activeTab} from '../reducers/index';

const mapStateToProps = (state,ownProps) => {
  // console.log("mapStateToProps=>"+JSON.stringify(state));
  let ctabs = state.tabs;
  if(ctabs.length===0 || ctabs[0].id !== 'home'){
    ctabs = [{
      id:'home',
      path:'/',
      title:"首页",
      active:false
    },...state.tabs];
  }

  let activeItem = ctabs.filter(item=>{
    return item.active;
  });
  if(activeItem.length === 0){
      ctabs[ctabs.length-1].active = true;
  }
  if(activeItem.length>1){
    activeItem[0].active = false;
  }

  return {
    tabs: [...ctabs]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (link) => {
      dispatch(addTab(link))
    },
    onDelete:(id)=>{
      dispatch(delTab(id))
    },
    activeTab:(id)=>{
      dispatch(activeTab(id))
    }
  }
}

const StatefulContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default StatefulContainer
