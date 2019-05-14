import React from 'react';
import './NavComponent.css';

export default class LeftComponent extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="left">Home Moments Notifications Messages</div>
                <div className="middle"></div>
                <div className="right"><input type="text" placeholder="Search Twitter"></input><button>Tweet</button></div>
            </div>
        )
    }
}