import React from 'react';
import TopHeader from '../Header/TopHeader';
import '../../../lib/B-JUI/BJUI/themes/css/style.css';
import '../../../lib/B-JUI/BJUI/themes/blue/core.css';
import '../../../lib/B-JUI/BJUI/themes/css/FA/css/font-awesome.min.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      const header = <TopHeader/>
      return (
        <div id="bjui-window">
            hello
          {header}
        </div>
      );
    }
}

export default App;
