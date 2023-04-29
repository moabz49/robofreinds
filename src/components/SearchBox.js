import React from 'react';

// onChange is a Html EVENT --> WE created a SEARCH ENGINE and assigned it some FUNCTIONS which then got passed to the 
// ...... the HTML Event listener 'onChange'.

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/> 
		</div>
	);
}

export default SearchBox;