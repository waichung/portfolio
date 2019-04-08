import React from 'react';
import lax from 'lax.js';
import Introduction from './Introduction';

class App extends React.Component {

  state={
    hasWindow: false
  }

  constructor(props) {
    super(props)
    this.state = { showBubble: false }
  }

  componentDidUpdate() {
    lax.setup();
    document.addEventListener('scroll', function(x) {
      lax.update(window.scrollY)
    }, false);
    lax.update(window.scrollY);
  }

  componentDidMount () {
    this.setState({
      hasWindow: true
    });
  }

  render () {
    return (
      <div id="main">
        <Introduction />
      </div>
    );
  }

}

export default App;
