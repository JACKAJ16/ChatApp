import React from 'react';
import './Input.css'

const Input = ({message, setMessage, sendMessage}) => (
	<div>
		<form className="input-form" onSubmit={(e)=>sendMessage(e)}>
			<input className="input-message"
			placeholder="Type a message..."
			value={message}
			onChange={(e) => setMessage(e.target.value)}
			type="text"/>
			<button className="send-btn"></button>
		</form>
	</div>
)

export default Input