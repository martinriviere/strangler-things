import React, { Component } from "react";
import bart from "../Design/Personnages/bart-lance-pierres.png";
import homer from "../Design/Personnages/homer-dos.png";
const charactersStyle = {
    position: "absolute",
    backgroundSize : "100% 100%",
    backgroundRepeat : "no-repeat"
}
const bartStyle = {
    height: "20vh",
    top : "1vh"
}
const homerStyle = {
    bottom : 0,
    height: "40vh",
    }
class Characters extends Component{
    // constructor(props){
    //     super(props)
   // }
    render(){
        return(
            <div id='characters' 
            style={{display: "flex",
            position: "relative",
            alignItems : "center",
            flexDirection: 'column',
            height: "100vh",
            width: "100vw"}}>
                <img style={{...bartStyle, ...charactersStyle}} src={bart} key = 'bart' />
                <img style={{...homerStyle, ...charactersStyle}} src ={homer} key = 'homer'></img>
            </div>
        )
    }
}

export default Characters;