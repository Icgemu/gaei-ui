import { createStore } from 'redux';
import tabs from '../reducers/TabsReducers';

import {AppConfig} from '../App/AppRouteConfig'

const arr = AppConfig.navibar?AppConfig.childs.map((child,i)=>{let bar = child.navibar;bar.id = i;return bar}):[]
const defaultlinks = {
  links:arr,
  currentActive:arr.length>0?arr[0]:{}
}
export default createStore(tabs,{
  links:defaultlinks,
  tabs:[],
  dialog:[],
  alerts:[]
});
