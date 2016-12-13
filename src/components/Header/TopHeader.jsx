import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import Navbar from './Navbar';

class TopHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      let {height} = this.props;
      let style = {height};
      return (
        <header id="bjui-header" style={style}>
            <Logo/>
            <Nav/>
            <Navbar/>
        </header>
      );
    }
}

export default TopHeader;
