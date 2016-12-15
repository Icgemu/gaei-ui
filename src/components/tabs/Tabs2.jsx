import React from 'react';
import { Link } from 'react-router'

class Tab2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      let {height} = this.props;
      let style = {height};
      return (
        <div className="items" data-noinit="true">
            <ul className="menu-items" data-faicon="table">
                <li><Link to="/t2/n4">普通表格4</Link></li>
                <li><Link to="/t2/n5">普通表格5</Link></li>
                <li><Link to="/t2/n6">普通表格6</Link></li>
            </ul>
        </div>
      );
    }
}

export default Tab2;
