import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';

class SwipeDetection extends Component {
    constructor(props){
        super(props)
        this.state={
            movLeft:false,
            movRight:false,
            movUp:false,
            movDown:false
        }
    }

    
    onSwipeStart(event) {
        console.log ('Start swiping...', event);
      }
     
    onSwipeMove(position, event) {
        console.log(`Moved ${position.x} pixels horizontally`, event);
        console.log(`Moved ${position.y} pixels vertically`, event);
    }
    
    onSwipeLeft(event) {
        this.setState({movX:true});
        console.log(this.state)
        }

    onSwipeRight(event) {
        console.log('Right');
        }
    
    onSwipeDown(event) {
        console.log('Down')
    }

    onSwipeUp(event){
        console.log ('Up')
    }
    
    

    
    render() {
    const boxStyle = {
        width: '100%',
        height: '300px',
        border: '1px solid black',
        background: '#ccc',
        padding: '20px',
        fontSize: '3em'
    };
    
    return (
        <Swipe
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            onSwipeUp={this.onSwipeUp}
            onSwipeDown={this.onSwipeDown}
        >
            <div style={boxStyle}>Open the console and swipe me</div>
        </Swipe>
    );
    }
}



export default SwipeDetection