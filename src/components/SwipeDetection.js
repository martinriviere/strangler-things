import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable'


class SwipeDetection extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
 
    onSwipedLeft = (event) => {
        if (event.absX < 30) this.props.handleSwipe("touch");
        else this.props.handleSwipe("left");
    }

    onSwipedRight = (event) => {
        if (event.absX < 30) this.props.handleSwipe("touch");
        else this.props.handleSwipe("right");
    }
    
    onClick = (event) => {
        this.props.handleSwipe("touch");
    }
      
    render() {
    const boxStyle = {
        width: '100vw',
        height: '100vh',
    };
    
    return (
        <Swipeable
            onSwipedLeft={this.onSwipedLeft}
            onSwipedRight={this.onSwipedRight}
        >
            <div onClick={this.onClick} style={boxStyle}></div>
        </Swipeable>
    );
    }
}



export default SwipeDetection