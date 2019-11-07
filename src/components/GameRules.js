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
        <div className="modalRules">
            <div>
            <img src={doughnut} style = {{width: "10vw"}} alt=""></img>
            <img src={homerRules} style = {{width : "50vw"}} alt = ""></img>
            <img src={duff} style = {{width: "10vw"}} alt = ""></img>
            </div>
            <div>
            <img src={tapRule} style = {{width: "60vw"}} alt = ""></img>
            </div>
        </div>
    </div> 
    )   
    }
}

export default GameRules