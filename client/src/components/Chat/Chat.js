import React, { useState, useEffect} from 'react';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'
import './Chat.css'
import close from '../../images/close.png';

let socket;

const Chat = ({location, history}) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
 	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const ENDPOINT = "localhost:5000"

	useEffect(() => {

		const { name, room } = location.state

		socket = io(ENDPOINT)

		setName(name);
		setRoom(room);
		
		socket.emit('join', {name, room}, (error) => {
			 if(error) {
		history.push("")
        alert(error);
      }
		})




		return ()  => {
			socket.emit('disconnect');

			socket.off();
		}



	}, [ENDPOINT, location.state, history])

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message])
		})

		socket.on("roomData", ({ users }) => {
      setUsers(users);
      	})
	}, [messages])


	const sendMessage = (e) => {
		e.preventDefault();

		if(message) {
			socket.emit('sendMessage', message, () => setMessage('') )
		}
	}
	
	return (
		<div className="chat">
			<div className="chat__inner">
				<div className="info">
					<InfoBar room={room} name={name}/>
					<TextContainer users={users}/>
				</div>
				<div className="messages-block">
					<a className="close" href='./'><img className="close-img" src={close} alt="close"/></a>
					<Messages room={room} messages={messages} name={name}/>
					<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
				</div>
			</div>
		</div>
		)
}

export default Chat