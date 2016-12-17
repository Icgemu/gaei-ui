import React from 'react';
import Container from '../Container/Container';
import Tabs2 from '../tabs/Tabs2';
class Container2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

      return (
        <Container left={<Tabs2/>} title="Tabs2">
            {this.props.children}
        </Container>
      );
    }
}

export default Container2;
