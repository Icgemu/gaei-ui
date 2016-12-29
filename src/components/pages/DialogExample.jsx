import DialogButton from '../dialog/DialogButton'
import {alertMsg} from '../dialog/Alertmsg'
import React from 'react'

export const DialogExample = ()=>{
  let c = <div> 测试 </div>
  let option = {id:1, title:"Dialog Example" ,component:c,width:300,height:200}
  return (
    <div>
      <DialogButton  className="btn btn-default" option={option}>点击打开</DialogButton>
    </div>
  )
}


export const AlertExample = ()=>{
  let c = <div> 测试 </div>
  let option = {id:1, type:'error',title:"告警",msg:"Dialog Example"}
  return (
    <div>
      <button  className="btn btn-default" onClick={e=>{alertMsg(option)}}>Alert</button>
    </div>
  )
}
