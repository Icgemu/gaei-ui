
export const addTab = (id,title,component) => {
  return {
    type: 'ADD_TAB',
    id,
    title,
    component
  }
}


export const delTab = (id) => {
  return {
    type: 'DEL_TAB',
    id
  }
}
