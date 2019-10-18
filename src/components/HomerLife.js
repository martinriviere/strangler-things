import React, {Component} from 'react';

let totalLife = 5


class HomerLife extends Component{
    constructor(props){
        super(props);
        this.state = {};
        
    }
    initializeLifeBar = () =>{
        const lifeBarArr=[];
        for (let i=0; i< this.totalLife; i++){
            lifeBarArr.push(<div style ={{
                backgroundImage : "../Design/Ressources image/pixel-heart-2779422_960_720-1.png",
                width : "15px",
                heigth : "15px"
            }}/>)
        }
    }
    render(){
        return(
        <div className = "lifeBar" style = {{
            flex:1,
            flexDirection : "column",
            position : "absolute",
            x : "20px",
            y : "100px"}}>
            {this.initializeLifeBar()}
        </div>)
    }
}
export default HomerLife