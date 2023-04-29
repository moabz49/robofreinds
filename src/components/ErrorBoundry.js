import React, { Component } from 'react';

// Start State
class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			hasError: false
		}
	}
// If there is error or incorrect info then setState --> hasError:true
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

// if hasError == true then render <h1> Oooops....</h1> 
// else if hasError == false display props.children(which are the cards)
	render() {
		if (this.state.hasError) {
			return <h1> Oooops. That is not good </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;