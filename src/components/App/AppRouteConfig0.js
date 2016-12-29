import App from "../App/app.jsx";
// import Container1 from '../Container/Container1';
import {FixedColumnTableComponent,PaginationTableComponent,ResizableColumnTableComponent,CustomColumnTableComponent,TreeTableComponent} from '../pages/table/FixedColumnTable'
import {PickerExample} from '../pages/picker/index.js'
import {DatePickerApp} from '../pages/datepicker/deploy/app.js'
import {EchartsApp} from '../pages/echarts/index.js'

export const  AppConfig = {
  path:"/",
  naviTo:App,
  navibar:true,
  leftbar:false,
  indexRoute:'n1',
  childs:[
    {path:'n1',title:'固定行列表格',naviTo:FixedColumnTableComponent},
    {path:'n2',title:'分页表格',naviTo:PaginationTableComponent},
    {path:'n3',title:'可变列宽表格',naviTo:ResizableColumnTableComponent},
    {path:'n4',title:'自定义行数据表格',naviTo:CustomColumnTableComponent},
    {path:'n5',title:'树形固表格',naviTo:TreeTableComponent},
    {path:'m1',title:'选择器样例',naviTo:PickerExample},
    {path:'b1',title:'时间选择器样例',naviTo:DatePickerApp},
    {path:'v1',title:'Echarts插件',naviTo:EchartsApp}
  ]
}