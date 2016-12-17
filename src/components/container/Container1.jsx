import React from 'react';
import Container from '../Container/Container';
import Tabs1 from '../tabs/Tabs1';
class Container1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

      return (
        <Container left={<Tabs1/>}>
          {this.props.children}
        </Container>
      );
    }
}

export default Container1;
