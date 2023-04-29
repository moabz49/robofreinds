import React, { Component } from  'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/cardlist';
import Scroll from '../components/Scroll';
import './app.css';
import ErrorBoundry from '../components/ErrorBoundry';

// now App has inherited robots PROPS but is Now ABLE to CHANGE them.
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}
	// using fetch to make API request to GET USERS information to create new robots for webpage.
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())  // return the file.json()
		.then(users => {this.setState({ robots: users })});  // make the users in the json file = this.setState({ robots: users})
	}

	
// changing the state	
// --> onSearchChange = (event) => onSearchChange and event are HTML properties thats why they need => and = Whereas react does not.
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	//Destructering code
	render() {
	  const { robots, searchfield } = this.state;
	  const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	  })
	  // if this robots.length == 0
	  // instead of if/ else we can use
	  // Ternary Operator --> condition ? expressionIfTrue : expressionIfFalse
	  return !robots.length ?
	  	<h1>Loading</h1> :
	    (
			<div className='tc'>	
				<h1 className='f1' >RoboFreinds</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>	
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>	
	  	);
	}	
}	

export default App;