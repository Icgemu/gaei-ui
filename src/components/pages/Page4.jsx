import React from 'react';
import { Link } from 'react-router';
class Page4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      let content = JSON.stringify(this.props.location)
      return <div> {content}</div>
    }
}
export default Page4
