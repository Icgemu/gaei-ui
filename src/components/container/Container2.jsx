import React from 'react';
import Container from '../Container/Container';
import StatefulContainer from '../Container/StatefulContainer';
import Tabs2 from '../tabs/Tabs2';
class Container2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

      return (
        <StatefulContainer left={<Tabs2/>}>
            {this.props.children}
        </StatefulContainer>
      );
    }
}

export default Container2;
