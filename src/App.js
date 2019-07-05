import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
// import Scroll from './Scroll';
import './App.css'
import robots from './robots'
//PROPS are properties that we pass down to use from
//one component to another

//STATE simply means the description of your app
//simply an object that describes your application

//Children is a way to render a way for something

class App extends Component{

	constructor()
	{
		super();
		this.state = {
			robots : robots,
			searchField: '',
		}
	}

	// componentDidMount()
//	{
//		fetch('https://jsonplaceholder.typicode.com/users').then(response =>
//			{
//				return response.json();
//			})
//		.then(users => this.setState({robots : users}));
//	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
	const filteredRobots = this.state.robots.filter(robots =>
	{
		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
	});

	return(
		<div className='tc'>
			<h1 className='f1'>WHOISMR.ROBOT ? </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			
				<CardList robots={filteredRobots}/>
		</div>
		);
	}
}

export default App;