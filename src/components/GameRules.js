import React, { Component } from "react";
import doughnut from "../Design/Projectiles/doughnut.png"
import duff from "../Design/Projectiles/duff.png"
import homerRules from "../Design/GameRules/homerRule.gif"
import tapRule from "../Design/GameRules/tapRule.png"
import "./modal.css"


class GameRules extends Component{
render(){
    return (
    <div className= "containerRules">
        <div>
            <img src={doughnut} style = {{width: "10vw",top: "20vh", zIndex: "2003"}} alt=""></img>
            <img src={homerRules} style = {{width : "50vw", zIndex: "2003"}} alt = ""></img>
            <img src={duff} style = {{width: "10vw",top: "20vh", zIndex: "2003"}} alt = ""></img>
        </div>
        <div>
            <img src={tapRule} style = {{width: "60vw", left: "20vw", position: "fixed", top: "50vh", zIndex: "2001"}} alt = ""></img>
        </div>
    </div> 
    )   
    }
}


export default GameRules