import React from 'react';
import { Link } from 'react-router';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.clickLink = this.clickLink.bind(this);
    }

    clickLink(e){
      let id = e.target.id;
      let link = this.props.links.filter(item =>{
       return  item.id === id;
     })[0];

      this.props.onLinkClick(link);
    }

    render() {
      let {height} = this.props;
      let style = {height};
      let links = this.props.links.map((item,i) => {
        return (
          <li><Link to={item.path} id={item.id} title={item.title} onClick={this.clickLink}>{item.title}</Link></li>
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
