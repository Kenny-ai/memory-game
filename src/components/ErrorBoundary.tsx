import React, { Component } from "react";

interface State {
  error: any;
  errorInfo: any;
}

export default class ErrorBoundary extends Component<{ children: any }, State> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  // static getDerivedStateFromError() {
  //   return { hasError: true };
  // }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            <p>{this.state.errorInfo.componentStack}</p>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
