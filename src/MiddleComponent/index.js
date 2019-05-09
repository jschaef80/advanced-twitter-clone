import React from 'react';
import './middlecomponent.css';

export default class MiddleComponent extends React.Component{
    render(){
        return(
            <div className="middle">

                <div className="middle-top">I'm middle-top</div>
                <div className="middle-bottom">I'm middle-bottom</div>

            </div>
        )
    }
}