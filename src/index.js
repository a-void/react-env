import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import TestComponent from './components/TestComponent';

// Stylesheets
import './index.styl';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello world.
        <TestComponent />
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));