const tabs = (state = {}, action) => {
  if(!state.tabs) state.tabs=[];
  let tabs = [...state.tabs];
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
        return Object.assign({}, state, {tabs:[...edited]});
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
      return Object.assign({}, state, {tabs:[...tabs]});
    case 'DEL_TAB':
      tabs = tabs.filter(t =>{return t.id != action.id});
      return  Object.assign({}, state, {tabs:[...tabs]});
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
        if(!active){
          tabs= [
            {
              id:'home',
              path:'/',
              title:"首页",
              active:true
            },
            ...activeItem
          ]
        }
        return  Object.assign({}, state, {tabs:[...tabs]});
    default:
      return state
  }
}

export default tabs
