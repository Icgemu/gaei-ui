import React from 'react';
import Nav from './Nav';
import Logo from './Logo';

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
        </header>
      );
    }
}

export default TopHeader;
