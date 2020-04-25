import React from 'react';
import './Message.css'


const Message = ({message: {user, text}, name}) => {

	let isSentByCurrentUser = false;

	if(user === name) {
		isSentByCurrentUser = true;
	}

	return (	
		<div className={`message + ${isSentByCurrentUser ? "message-current" :  "message-other"}`}>
			<div className="message-info">
				<p className="user">{user ? user : null}</p>
			</div>
			<div>
				<p className="text">{text}</p>
			</div>
		</div>	
	)
}

export default Message