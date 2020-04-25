import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';


const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	
	return (
		<div className="join">
			<div className="join__inner">
				<h1>Chat app</h1>
				<div>
					<input className="join__input" placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}/>
				</div>
				<div>
					<input className="join__input" placeholder="Room" type="text" onChange={(e) => setRoom(e.target.value)}/>
					<p className="join__test">test: testroom</p>
				</div>
				<Link onClick={e => (!room || !name) ? e.preventDefault() : null} to={{pathname: `/chat`, state: {name: name, room: room}}}>
					<button className="join__btn" type="submit">Sign in</button>
				</Link>				
			</div>
		</div>
	)
}






export default Join