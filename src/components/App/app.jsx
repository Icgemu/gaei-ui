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
        this.state = {containerH:100,containerW:100};
    }

    render() {

      let {topHeight,footerHeight,sidebarW} = this.props;
      return (
        <div id="bjui-window">
          <TopHeader height={topHeight}/>
          <Container sidebar={sidebarW} height={this.state.containerH} width={this.state.containerW}/>
          <Footer height={footerHeight}/>
        </div>
      );
    }
}

export default App;
