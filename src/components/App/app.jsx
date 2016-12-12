import React from 'react';
import TopHeader from '../Header/TopHeader';
import Container from '../container/Container';
import Footer from '../foot/Footer';
import '../../../lib/B-JUI/BJUI/themes/css/style.css';
import '../../../lib/B-JUI/BJUI/themes/blue/core.css';
import '../../../lib/B-JUI/BJUI/themes/css/FA/css/font-awesome.min.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="bjui-window">
          <TopHeader/>
          <Container/>
          <Footer/>
        </div>
      );
    }
}

export default App;
