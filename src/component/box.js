import React, { Component } from 'react'

export default class box extends Component {
    render() {
        return (
            <div className="wrapper">
             <div style={{backgroundColor:`${this.props.color}`}} 
             className="main-wrapper">
                <button onClick={()=>{this.props.handleClick()}}>change color</button>
            </div>
            </div>
           
        )
    }
}
