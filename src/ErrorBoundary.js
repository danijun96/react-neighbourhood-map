import React, { Component } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

componentDidCatch(error, info) {
   // Display fallback UI
  this.setState({ haveError: true });
    console.log(error, info);
}
  
 gm_authFailure(e) {
   window.alert('Something went wrong with Google Maps' );
 }
  
render() {
  window.gm_authFailure = this.gm_authFailure;
  if (this.state.hasError) {
    return <p className="error">Something went wrong with Google Maps</p>
  }
  return this.props.children;
  }
}

export default ErrorBoundary
