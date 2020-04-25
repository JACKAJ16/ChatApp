import React from 'react';
import './InfoBar.css'

const InfoBar = ({room, name}) => (
		<div className="infoBar">
			Current room: {room}
		</div>
	)

export default InfoBar