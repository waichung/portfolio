import React from 'react';
import lax from 'lax.js';


function withLax(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidUpdate() {
      const listOfLaxElements = document.getElementsByClassName('lax');
      for (let i=0; i<listOfLaxElements.length; i++) {
        lax.addElement(listOfLaxElements[i]);
      }
    }

    componentWillUnmount() {
      const listOfLaxElements = document.getElementsByClassName('lax');
      for (let i=0; i<listOfLaxElements.length; i++) {
        lax.removeElement(listOfLaxElements[i]);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLax;