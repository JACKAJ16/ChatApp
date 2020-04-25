import React from 'react';
import './TextContainer.css'
import icon from '../../images/onlineIcon.png'

const TextContainer = ({users}) => (
	<div>
		{users ?
			(<div className="users">
				{users.map(({name}) => (
	                <div className="user__inner" key={name}>
	        	        <img className="icon" src={icon} alt="online"/>
	                    {name}
	                </div>
	               ))}
			</div>) : null
		}
	</div>
	)


export default TextContainer