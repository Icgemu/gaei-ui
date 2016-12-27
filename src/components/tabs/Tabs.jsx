import React from 'react'
import { Link } from 'react-router'
import styles from "./tabs.scss"
class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let {height} = this.props;
      let style = {height};
      let links = this.props.links.map((item,i) => {
        let ul ;
        if(item.childs){
          let lis = item.childs.map(child =>{
            return (
              <li><Link to={child.path} id={child.id} title={child.title}>{child.title}</Link></li>
            )
          });
          ul = (
          <li>
          {item.title}
          <ul>
            {lis}
          </ul>
        </li>
          )
        }else{
          ul = <li>{item.title}</li>
        }
        return ul
      })

      return (
          <ul>{links}</ul>
      )
    }
}

export default Tabs;
