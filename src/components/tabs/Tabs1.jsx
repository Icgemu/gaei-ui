import React from 'react';
import { Link } from 'react-router';

class Tab1 extends React.Component {
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
                <li><Link to="/t1/n1">普通表格1</Link></li>
                <li><Link to="/t1/n3">普通表格2</Link></li>
                <li><Link to="/t1/n2">普通表格3</Link></li>
            </ul>
        </div>
      );
    }
}

export default Tab1;
