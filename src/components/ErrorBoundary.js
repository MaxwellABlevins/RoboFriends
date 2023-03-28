import React from "react";
import { render } from "react-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError === true) {
            return <h1>There was an error in our system. Sorry</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;