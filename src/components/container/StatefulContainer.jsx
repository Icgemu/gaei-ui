import { connect } from 'react-redux';
import Container from './Container';
import {addTab} from '../reducers/index';

const mapStateToProps = (state) => {
  return {
    tabs: [...state]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (link) => {
      dispatch(addTab(link))
    }
  }
}

const StatefulContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default StatefulContainer
