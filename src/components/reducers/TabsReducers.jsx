 import { combineReducers } from 'redux'
const tabs = (state = [], action) => {
  //if(!state.tabs) state.tabs=[];
  let tabs = [...state];
  switch (action.type) {
    case 'ADD_TAB':
      let added = tabs.filter(item=>{return item.id === action.id});
      if(added.length>0){
        let edited = tabs.map(item=>{
          if(item.id === action.id){
            item.active = true;
          }else{
            item.active = false;
          }
          return item;
        });
        return [...tabs]
      }else{
        tabs.map(item=>{
          item.active = false;
        })
      }
      tabs.push(
        {
          id: action.id,
          title: action.title,
          path: action.path,
          active:true
        }
      );
      return [...tabs];
    case 'DEL_TAB':
      tabs = tabs.filter(t =>{return t.id != action.id});
      return  [...tabs];
    case 'ACTIVE_TAB':
        let active = false;
        let activeItem = tabs.map(item=>{
          if(item.id === action.id){
            item.active = true;
            active = true;
          }else{
            item.active = false;
          }
          return item;
        })

        return  [...activeItem];
    default:
      return state
  }
}
const links = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_LINK':
      let active1 = state.links.filter(item=>{
        return item.id === action.id;
      })[0];
      return Object.assign({},state,{
        currentActive:active1
      });
    case 'ACTIVE_URL':
        let active2 = state.links.filter(item=>{
          return action.id.indexOf(item.path)!=-1;
        })[0];
        if(active2.id === state.currentActive.id){
          return state;
        }
        return Object.assign({},state,{
          currentActive:active2
        });
    default:
      return state
    }
}
export default combineReducers({
    tabs,
    links
});
