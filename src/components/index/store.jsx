import { createStore } from 'redux';
import tabs from '../reducers/TabsReducers';

export default createStore(tabs,{
  links:{
    links:[
      {id:"header1",path:"/t1",title:"导航1"},
      {id:"header2",path:"/t2",title:"导航2"}
    ],
    currentActive:{id:"header1",path:"/t1",title:"导航1"}
  },
  tabs:[],
  dialog:[],
  alerts:[]
});
