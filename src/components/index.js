import React from 'react';
import Header from './Header';
import Something from './Something';
import lax from 'lax.js';

class App extends React.Component {

  state={
    hasWindow: false
  }

  constructor(props) {
    super(props)
    this.state = { showBubble: false }
    lax.setup()
    if (typeof window !== 'undefined') {
      document.addEventListener('scroll', function(x) {
        lax.update(window.scrollY)
      }, false)
    }
    lax.update(window.scrollY)
  }

  componentDidMount () {
    this.setState({
      hasWindow: true
    });
  }

  render () {
    return (
      <div id="main">
        <Header loadState={this.state.hasWindow}/>
        <Something />
      </div>
    );
  }

}

export default App;
