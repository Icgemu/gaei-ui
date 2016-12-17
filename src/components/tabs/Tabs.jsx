import React from 'react';
import { Link } from 'react-router';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[
          {path:'/t1/n1',title:'普通表格1'},
          {path:'/t1/n2',title:'普通表格2'},
          {path:'/t1/n3',title:'普通表格3'}
        ]};
        this.clickLink = this.clickLink.bind(this);
    }

    clickLink(e){
      this.props.onLinkClick(e.target.title);
    }

    render() {
      let {height} = this.props;
      let style = {height};
      let links = this.props.links.map((item,i) => {
        return (
          <li><Link to={item.path} title={item.title} onClick={this.clickLink}>{item.title}</Link></li>
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
