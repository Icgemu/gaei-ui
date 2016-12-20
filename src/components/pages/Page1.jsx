import React from 'react';
import { Link } from 'react-router';
class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      let content = JSON.stringify(this.props)
      return <div> {content}</div>
    }
}
export default Page1
