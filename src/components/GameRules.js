import React, { Component } from "react";
import doughnut from "../Design/Projectiles/doughnut.png"
import duff from "../Design/Projectiles/duff.png"
import homerRules from "../Design/GameRules/homerRule.gif"
import tapRule from "../Design/GameRules/tapRule.png"
import "./GameRules.css"



const itemsStyle ={
    width: "10vw",
    top: "20vh"
}

class GameRules extends Component{
render(){
    return <div id= "ruleModalOpacity">
        <div id="GameRules-background">
            <div id = "swipe">
                <img src={doughnut} style = {itemsStyle} alt=""></img>
                <img src={homerRules} style = {{width : "50vw"}} alt = ""></img>
                <img src={duff} style = {itemsStyle} alt = ""></img>
            </div>
            <img src={tapRule} 
            style = {{width: "60vw",
             left: "20vw", position: "fixed",
              top : "50vh"}} alt = ""></img>
        </div>
    </div> 
       
    }
}


export default GameRules