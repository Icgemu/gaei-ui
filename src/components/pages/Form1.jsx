import React from 'react';
import { Link } from 'react-router';
class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div className="bjui-pageContent">
            <form action="ajaxDone1.html" id="j_form_form" className="pageForm" data-toggle="validate">
                <div style={{margin:'15px auto 0',width:'800px'}}>
                    <fieldset>
                        <legend>文本框1</legend>
                        <table className="table table-condensed table-hover">
                            <thead>
                                <tr>
                                    <th>样例</th>
                                    <th>class</th>
                                    <th>属性</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="text" value="普通文本框"/></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className="input-sm" value="小尺寸文本框"/></td>
                                    <td>input-sm</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className="input-nm" value="稍大尺寸文本框"/></td>
                                    <td>input-nm</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className="input-lg" value="较大尺寸文本框"/></td>
                                    <td>input-lg</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><input type="text" value="固定尺寸的普通文本框" size="30"/></td>
                                    <td></td>
                                    <td>size="30"</td>
                                </tr>
                                <tr>
                                    <td><input type="text" value="只读文本框" size="30" readonly/></td>
                                    <td></td>
                                    <td>size="30" readonly</td>
                                </tr>
                                <tr>
                                    <td><input type="text" value="已禁用的文本框" size="30" disabled/></td>
                                    <td></td>
                                    <td>size="30" disabled</td>
                                </tr>
                                <tr>
                                    <td><textarea>普通多行文本框</textarea></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><textarea cols="30">固定尺寸的普通多行文本框</textarea></td>
                                    <td></td>
                                    <td>cols="30"</td>
                                </tr>
                                <tr>
                                    <td><textarea cols="30" rows="1" data-toggle="autoheight">自动调整高度的多行文本框</textarea></td>
                                    <td></td>
                                    <td>cols="30" rows="1" data-toggle="autoheight"</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div className="alert alert-warning form-inline"><i className="fa fa-warning"></i> <strong>Class说明：</strong>JS会为text或textarea自动加上Class[form-control]。</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                      <Link to="/t3/i1">Go</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>
            </form>
            {this.props.children}
        </div>
      );
    }
}

export default Form1;
