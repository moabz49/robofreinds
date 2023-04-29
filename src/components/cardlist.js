import 	React from 'react';
import Card from './card';
// We can also import the 'propt' robots from Cards as we have used it there before
// javascript always gets {} --> wrapped in curly brackets in React.

const CardList = ({ robots }) => {
	const cardComponent = robots.map((user, i) => {
		return (
			<Card 
			key={i} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
			/>
		);
	})
	return (
		<div>
	      {cardComponent}
    	</div>
	);
}

export default CardList;