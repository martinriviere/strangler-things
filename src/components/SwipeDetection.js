import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';

class SwipeDetection extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    
    onSwipeMove(position, event) {
        if (position.x < -30) console.log("left");
        else if (position.x > 30)  console.log("right");
        else console.log("touch");
    }
    
    // onSwipeLeft(position, event) {
    //     console.log(position.x)
    //     if (position.x > -30) console.log("touch")
    //     // this.setState({movX:true});
    //     else console.log("left")
    //     }

    // onSwipeRight(event) {
    //     console.log('Right');
    //     }
    
    // // onSwipeDown(event) {
    // //     console.log('Down')
    // // }

    // onSwipeUp(event){
    //     console.log ('Up')
    // }
    
    

    
    render() {
    const boxStyle = {
        width: '100vw',
        height: '100vh',
    };
    
    return (
        <Swipe
            onSwipeMove={this.onSwipeMove}
            // onSwipeLeft={this.onSwipeLeft}
            // onSwipeRight={this.onSwipeRight}
            // onSwipeUp={this.onSwipeUp}
            // onSwipeDown={this.onSwipeDown}
        >
            <div style={boxStyle}></div>
        </Swipe>
    );
    }
}



export default SwipeDetection