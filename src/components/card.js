import React from 'react';

// Only can return one element in this case the PARENT <DIV>.
// tc= text-center br=border/ p=padding ma=margin grow=image grow on hover bw= border width(all affect from tachyons)
// props.id will allow us to get different robots for each person.
// instead of (props) you can destructure and do --> { name, email, id }) --> same Result
const Card = ({ name, email, id }) => { 
  return (
	<div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
		<img src={`https://robohash.org/${id}?200X200`} alt="robots"/>
		<div>                            
		    <h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
  );
}

export default Card;