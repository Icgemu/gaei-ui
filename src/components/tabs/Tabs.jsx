import React from 'react';
import { Link } from 'react-router';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let {height} = this.props;
      let style = {height};
      let links = this.props.links.map((item,i) => {
        return (
          <li><Link to={item.path} id={item.id} title={item.title}>{item.title}</Link></li>
        )
      })
      return (
        <div className="items" data-noinit="true">
            <ul className="menu-items" data-faicon="table">
              {links}
            </ul>
        </div>
      );
    }
}

export default Tabs;
