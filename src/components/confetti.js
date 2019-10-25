import React from 'react'
import Confetti from 'react-dom-confetti';

const config = {
  angle: "90",
  spread: 45,
  startVelocity: "58",
  elementCount: "146",
  dragFriction: 0.1,
  duration: "5760",
  stagger: 0,
  width: "8px",
  height: "8px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};


class ConfettiWin extends React.Component {
	state = {
		open: true,
	}

	render() {
		const { open } = this.state;
		return (
			<Confetti active={ true } config={ config }     />
		)
	}	
}

export default ConfettiWin;