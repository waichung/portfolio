import React from 'react';
import lax from 'lax.js';
import Introduction from './Introduction';
// import Something from './Something';

class App extends React.Component {

  state={
    hasWindow: false
  }

  constructor(props) {
    super(props);
    lax.setup();
    if (typeof window !== 'undefined') {
      document.addEventListener('scroll', function(x) {
        lax.update(window.scrollY);
      }, false);
    }
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
        {/* <Something /> */}
      </div>
    );
  }

}

export default App;
