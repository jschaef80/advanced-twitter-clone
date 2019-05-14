import React from 'react';
import './rightcomponent.css';

export default class RightComponent extends React.Component{
    render(){
        return(
            <div className="right">

                <div className="right-top">I'm right-top</div>
                <div className="right-bottom">I'm right-bottom</div>

            </div>
        )
    }
}