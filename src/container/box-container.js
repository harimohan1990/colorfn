import React, { Component } from 'react';
import {connect}  from 'react-redux';
import * as actionCreator from '../actions/index';
import Box from '../component/box';
 class Boxcon extends Component {
    render() {
        return (
            <div className="boxcon-wrapper">
                <Box handleClick={this.props.loadColor} color={this.props.color}/>
            </div>
        )
    }
}
const  mapStateToProps =(state)=>{
    return state;
} 

export default connect(mapStateToProps,actionCreator)(Boxcon)