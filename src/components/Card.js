import React from 'react';

 const Card = ({id, name, username, email}) => {
		return (
			<div className="tc bg-gold dib br3 pa3 ma2 grow bw2 shadow">
				<img src={`https://robohash.org/${id}?200x200"`} alt="robots"/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
			);
 	
	
};

export default Card;