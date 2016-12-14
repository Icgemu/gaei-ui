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
        this.state = {containerH:100,containerW:100,topHeight:70,footerHeight:25,sidebarW:200};
    }

    componentDidMount() {
      //let {topHeight,footerHeight,sidebarW} = this.props;
      let {topHeight,footerHeight,sidebarW} = this.state;
      let ww = $(window).width();
      let hh = $(window).height();
      this.setState({containerH:(hh-topHeight-footerHeight),containerW:ww});

      $(window).resize(this.resize.bind(this));

    }

    resize(){
      //let {topHeight,footerHeight,sidebarW} = this.props;
      let {topHeight,footerHeight,sidebarW} = this.state;
      let ww = $(window).width();
      let hh = $(window).height();
      this.setState({containerH:(hh-topHeight-footerHeight),containerW:ww});
    }

    render() {

      //let {topHeight,footerHeight,sidebarW} = this.props;
      let {topHeight,footerHeight,sidebarW} = this.state;
      //let topHeight=70,footerHeight=25,sidebarW=200;
      return (
        <div id="bjui-window">
          <TopHeader height={topHeight}/>
          <Container left={this.props.side} page={this..page} sidebar={sidebarW} height={this.state.containerH} width={this.state.containerW}/>
          <Footer height={footerHeight}/>
        </div>
      );
    }
}

export default App;
