import React from 'react';
import Container from '../Container/Container';
import StatefulContainer from '../Container/StatefulContainer';
import Tabs1 from '../tabs/Tabs1';
class Container1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

      return (
        <StatefulContainer left={<Tabs1/>} {...this.props}>
          {this.props.children}
        </StatefulContainer>
      );
    }
}

export default Container1;
