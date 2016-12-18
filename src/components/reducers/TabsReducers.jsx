const tab = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return {
        id: action.id,
        title: action.title,
        path: action.path
      }
    case 'DEL_TAB':
      if (state.id !== action.id) {
        return state
      }
    default:
      return state
  }
}


const tabs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return [
        ...state,
        tab(undefined, action)
      ]
    case 'DEL_TAB':
      return state.map(t =>
        tab(t, action)
      )
    default:
      return state
  }
}


export default tabs
