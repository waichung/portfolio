import React from 'react';
import lax from 'lax.js';


function withLax(WrappedComponent, listOfIds) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidUpdate() {
      console.log(listOfIds);
      listOfIds.map(id => lax.addElement(document.getElementById(id)));
    }

    componentWillUnmount() {
      listOfIds.map(id => lax.removeElement(document.getElementById(id)));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLax;