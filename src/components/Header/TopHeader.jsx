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
      return (
        <header id="bjui-header">
            <Logo/>
            <Nav/>
            <Navbar/>
        </header>
      );
    }
}

export default TopHeader;
