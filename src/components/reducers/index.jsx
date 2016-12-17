
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

export const windowInfo = () => {
  let ww = $(window).width();
  let hh = $(window).height();

  let th = $('#bjui-header').height();
  let fh = $('#bjui-footer').height();
  return {
    ww,
    hh,
    th,
    fh
  }
}
