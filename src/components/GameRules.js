import React, { Component } from "react";
import heart from "../Design/Images/pixel-heart-2779422_960_720-1.png";
import brocoli from "../Design/Projectiles/brocoli.png"
import flanders from "../Design/Projectiles/flanders.png"
import doughnut from "../Design/Projectiles/doughnut.png"
import duff from "../Design/Projectiles/duff.png"
import homerRules from "../Design/GameRules/homerRule.gif"
import tapRule from "../Design/GameRules/tapRule.png"
import "./GameRules.css"


const homerStyle = {
    width: "50vw",
    //left: "50%",
    //marginLeft: "-25vw",
}
const itemsStyle ={
    width: "10vw",
    top: "20vh"
}

class GameRules extends Component{
    constructor(props){
        super(props)

    }
render(){
    return <div id= "ruleModalOpacity">
        <div id="GameRules-background">
            <div id = "swipe">
                <img src={doughnut} style = {itemsStyle} alt=""></img>
                <img src={homerRules} style = {homerStyle} alt = ""></img>
                <img src={duff} style = {itemsStyle} alt = ""></img>
            </div>
            <img src={tapRule} style = {{width: "60vw", left: "20vw", position: "fixed", top : "50vh"}} alt = ""></img>
        </div>
    </div> 
       
    }
}


export default GameRules