import React from 'react'
import TestComponent from './test.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'hoge'};
  }

  render() {
    return (
      <div>
        <p>test</p>
        <p>{this.state.test}</p>
        <TestComponent hoge={this.state.test}/>
      </div>
    );
  }
}

export default App;
