import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-hnav">
            <button type="button" className="btn-default bjui-hnav-more-left" title="导航菜单左移"><i className="fa fa-angle-double-left"></i></button>
            <div id="bjui-hnav-navbar-box">
                <ul id="bjui-hnav-navbar">
                    <li className="active"><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-check-square-o"></i> 表单元素</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="hand-o-up">
                                <li><a href="form-button.html" data-options="{id:'form-button', faicon:'hand-o-up'}">按钮</a><b><i className="fa fa-angle-down"></i></b>
                                    <ul className="menu-items-children">
                                        <li><a href="form-input.html" data-options="{id:'form-input', faicon:'terminal'}">文本框</a></li>
                                        <li><a href="form-select.html" data-options="{id:'form-select', faicon:'caret-square-o-down'}">下拉选择框</a></li>
                                    </ul>
                                </li>
                                <li><a href="form-input.html" data-options="{id:'form-input', faicon:'terminal'}">文本框</a></li>
                                <li><a href="form-select.html" data-options="{id:'form-select', faicon:'caret-square-o-down'}">下拉选择框</a></li>
                                <li><a href="form-checkbox.html" data-options="{id:'form-checkbox', faicon:'check-square-o'}">复选、单选框</a></li>
                            </ul>
                            <ul className="menu-items" data-tit="表单Demo" data-faicon="list">
                                <li><a href="form.html" data-options="{id:'form-demo', faicon:'th-large'}">表单示例</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-table"></i> 表格</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="table">
                                <li><a href="table.html" data-options="{id:'table', faicon:'table'}">普通表格</a></li>
                                <li><a href="table-fixed.html" data-options="{id:'table-fixed', faicon:'list-alt'}">固定表头表格</a></li>
                                <li><a href="table-edit.html" data-options="{id:'table-edit', faicon:'indent'}">可编辑表格</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-table"></i> Datagrid(beta)</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="table">
                                <li><a href="datagrid-convertable.html" data-options="{id:'datagrid-convertable', faicon:'table'}">转换普通表格</a></li>
                                <li><a href="datagrid-demo.html" data-options="{id:'datagrid-demo', faicon:'table'}">完整示例</a></li>
                                <li><a href="datagrid-datatype.html" data-options="{id:'datagrid-datatype', faicon:'table'}">三种数据类型</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-plane"></i> 弹出窗口</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="plane">
                                <li><a href="dialog.html" data-options="{id:'dialog', faicon:'plane'}">弹出窗口</a></li>
                                <li><a href="alert.html" data-options="{id:'alert', faicon:'info-circle'}">信息提示</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-image"></i> 图形报表</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="image">
                                <li><a href="highcharts.html" data-options="{id:'chart', faicon:'image'}">Highcharts图表</a></li>
                                <li><a href="echarts.html" data-options="{id:'echarts', faicon:'image'}">ECharts图表</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-coffee"></i> 框架组件</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="coffee">
                                <li><a href="tabs.html" data-options="{id:'tabs', faicon:'columns'}">选项卡</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-bug"></i> 其他插件</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="bug">
                                <li><a href="ztree.html" data-options="{id:'ztree', faicon:'tree'}">zTree</a></li>
                                <li><a href="ztree-select.html" data-options="{id:'ztree-select', faicon:'caret-square-o-down'}">zTree下拉选择</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-database"></i> 综合应用</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="database">
                                <li><a href="table-layout.html" data-options="{id:'table-layout', faicon:'refresh'}">局部刷新1</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;" data-toggle="slidebar"><i className="fa fa-file-word-o"></i> 在线文档</a>
                        <div className="items hide" data-noinit="true">
                            <ul className="menu-items" data-faicon="star-o" data-tit="框架介绍">
                                <li><a href="doc/base/filelist.html" data-options="{id:'doc-file', faicon:'caret-right'}">文件详解</a></li>
                                <li><a href="doc/base/structure.html" data-options="{id:'doc-structure', faicon:'caret-right'}">页面结构</a></li>
                                <li><a href="doc/base/init.html" data-options="{id:'doc-init', faicon:'caret-right'}">框架初始化</a></li>
                                <li><a href="doc/base/hnav.html" data-options="{id:'doc-hnav', faicon:'caret-right'}">横向导航菜单</a></li>
                                <li><a href="doc/base/navtab.html" data-options="{id:'doc-navtab', faicon:'caret-right'}">标签工作区(navtab)</a></li>
                                <li><a href="doc/base/dialog.html" data-options="{id:'doc-dialog', faicon:'caret-right'}">弹窗工作区(dialog)</a></li>
                                <li><a href="doc/base/idname.html" data-options="{id:'doc-idname', faicon:'caret-right'}">元素ID命名规范</a></li>
                                <li><a href="doc/base/data.html" data-options="{id:'doc-data', faicon:'caret-right'}">data属性</a></li>
                                <li><a href="doc/base/api.html" data-options="{id:'doc-api', faicon:'caret-right'}">jQuery API调用</a></li>
                                <li><a href="doc/base/event.html" data-options="{id:'doc-event', faicon:'caret-right'}">事件</a></li>
                                <li><a href="doc/base/url.html" data-options="{id:'doc-url', faicon:'caret-right'}">URL动态赋值</a></li>
                                <li><a href="doc/theme/color.html" data-options="{id:'doc-theme', faicon:'caret-right'}">颜色值</a></li>
                            </ul>
                            <ul className="menu-items" data-faicon="th" data-tit="框架组件">
                                <li><a href="doc/navtab/navtab.html" data-options="{id:'doc-navtab', faicon:'caret-right'}">标签navtab</a></li>
                                <li><a href="doc/navtab/navtab-op.html" data-options="{id:'doc-navtab', faicon:'caret-right'}">navtab参数</a></li>
                                <li><a href="doc/dialog/dialog.html" data-options="{id:'doc-dialog', faicon:'caret-right'}">弹窗dialog</a></li>
                                <li><a href="doc/dialog/dialog-op.html" data-options="{id:'doc-dialog', faicon:'caret-right'}">dialog参数</a></li>
                                <li><a href="doc/alertmsg/alertmsg.html" data-options="{id:'doc-alertmsg', faicon:'caret-right'}">信息提示alertmsg</a></li>
                                <li><a href="doc/form/datepicker.html" data-options="{id:'doc-datepicker', faicon:'caret-right'}">日期选择器</a></li>
                                <li><a href="doc/form/spinner.html" data-options="{id:'doc-spinner', faicon:'caret-right'}">微调器</a></li>
                                <li><a href="doc/form/lookup.html" data-options="{id:'doc-lookup', faicon:'caret-right'}">查找带回</a></li>
                                <li><a href="doc/form/tags.html" data-options="{id:'doc-tags', faicon:'caret-right'}">自动完成标签</a></li>
                                <li><a href="doc/form/upload.html" data-options="{id:'doc-upload', faicon:'caret-right'}">Ajax上传组件</a></li>
                                <li><a href="doc/other/contextmenu.html" data-options="{id:'doc-contextmenu', faicon:'caret-right'}">右键菜单</a></li>
                            </ul>
                            <ul className="menu-items" data-faicon="spinner" data-tit="Ajax">
                                <li><a href="doc/ajax/callback.html" data-options="{id:'doc-callback', faicon:'caret-right'}">回调函数</a></li>
                                <li><a href="doc/ajax/form.html" data-options="{id:'doc-form-submit', faicon:'caret-right'}">提交表单</a></li>
                                <li><a href="doc/ajax/search.html" data-options="{id:'doc-search', faicon:'caret-right'}">搜索表单</a></li>
                                <li><a href="doc/ajax/load.html" data-options="{id:'doc-load', faicon:'caret-right'}">加载(局部刷新)</a></li>
                                <li><a href="doc/ajax/action.html" data-options="{id:'doc-action', faicon:'caret-right'}">执行动作</a></li>
                            </ul>
                            <ul className="menu-items" data-faicon="table" data-tit="表格相关">
                                <li><a href="doc/table/style.html" data-options="{id:'doc-table-style', faicon:'caret-right'}">表格样式</a></li>
                                <li><a href="doc/table/order.html" data-options="{id:'doc-table-order', faicon:'caret-right'}">字段排序</a></li>
                                <li><a href="doc/table/paging.html" data-options="{id:'doc-table-paging', faicon:'caret-right'}">分页组件</a></li>
                                <li><a href="doc/table/selected.html" data-options="{id:'doc-table-selected', faicon:'caret-right'}">行选中操作</a></li>
                                <li><a href="doc/table/fixed.html" data-options="{id:'doc-table-fixed', faicon:'caret-right'}">固定表头</a></li>
                                <li><a href="doc/table/edit.html" data-options="{id:'doc-table-edit', faicon:'caret-right'}">可编辑表格</a></li>
                            </ul>
                            <ul className="menu-items" data-faicon="table" data-tit="Datagrid">
                                <li><a href="doc/datagrid/datagrid-demo.html" data-options="{id:'doc-datagrid-demo', faicon:'caret-right'}">datagrid示例</a></li>
                                <li><a href="doc/datagrid/datagrid-op.html" data-options="{id:'doc-datagrid-op', faicon:'caret-right'}">datagrid参数</a></li>
                                <li><a href="doc/datagrid/datagrid-columns.html" data-options="{id:'doc-datagrid-columns', faicon:'caret-right'}">columns参数</a></li>
                            </ul>
                            <ul className="menu-items" data-faicon="image" data-tit="图形报表(插件)">
                                <li><a href="doc/chart/highcharts.html" data-options="{id:'', faicon:'caret-right'}">Highcharts图表</a></li>
                                <li><a href="doc/chart/echarts.html" data-options="{id:'', faicon:'caret-right'}">ECharts图表</a></li>
                            </ul>
                            <ul className="menu-items" data-faicon="bug" data-tit="其他插件">
                                <li><a href="doc/plugin/ztree.html" data-options="{id:'doc-ztree', faicon:'caret-right'}">zTree</a></li>
                                <li><a href="doc/plugin/checkbox.html" data-options="{id:'doc-icheck', faicon:'caret-right'}">复选/单选</a></li>
                                <li><a href="doc/plugin/select.html" data-options="{id:'doc-selectpicker', faicon:'caret-right'}">下拉选择框</a></li>
                                <li><a href="doc/plugin/validate.html" data-options="{id:'doc-nicevalidator', faicon:'caret-right'}">表单验证</a></li>
                                <li><a href="doc/plugin/kindeditor.html" data-options="{id:'doc-kindeditor', faicon:'caret-right'}">KindEditor</a></li>
                                <li><a href="doc/plugin/ajaxdownload.html" data-options="{id:'doc-ajaxdownload', faicon:'caret-right'}">Ajax Download</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-cog"></i> 系统设置 <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">角色权限</a></li>
                            <li><a href="#">用户列表</a></li>
                            <li className="divider"></li>
                            <li><a href="#">关于我们</a></li>
                            <li className="divider"></li>
                            <li><a href="#">友情链接</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <button type="button" className="btn-default bjui-hnav-more-right" title="导航菜单右移"><i className="fa fa-angle-double-right"></i></button>
        </div>
      );
    }
}

export default Navbar;
