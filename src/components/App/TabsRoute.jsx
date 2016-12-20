
import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import {addTab} from '../reducers/index';

class TabsRoute extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  onEnter(e,item){
    console.log("enter1:"+item)
    this.props.onEnter(item);
  }
  render() {
    let {
      path,
      title,
      id
    } = this.props;
   let item = {id,title,path}
    return(
      <Route {...this.props} onEnter={e=>{console.log('enter');this.onEnter(e,item)}} ></Route>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEnter: (item) => {
      console.log("enter2:"+item)
      //dispatch(addTab(link))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TabsRoute)
