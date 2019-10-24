import React, { Component } from "react";
import heart from "../Design/Images/pixel-heart-2779422_960_720-1.png";
import brocoli from "../Design/Projectiles/brocoli.png"
import flanders from "../Design/Projectiles/flanders.png"
import doughnut from "../Design/Projectiles/doughnut.png"
import duff from "../Design/Projectiles/duff.png"
import homerRules from "../Design/GameRules/homerRule.gif"
import "./GameRules.css"


const homerStyle = {
    width: "50vw",
    //position: "absolute",
    //left: "50%",
    //marginLeft: "-25vw",
    marginTop: "-30vh"

}
const itemsStyle ={
    //position: "absolute",
    width: "10vw",
    marginTop: "-30vh"
}

function GameRules(props){
    return <div>
        <div id= "opacity"></div>
        <div id="GameRules-background">
            {/* <div style ={{ flex : 1, flexDirection : "row", justifyContent: "center"}}> */}
                <img src={doughnut} style = {itemsStyle} alt=""></img>
                <img src={homerRules} style = {homerStyle} alt = ""></img>
                <img src={duff} style = {itemsStyle} alt = ""></img>
            {/* </div> */}
        </div>
    </div>    
    
}


export default GameRules