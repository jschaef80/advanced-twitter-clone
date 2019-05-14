import React from 'react';
import './leftcomponent.css';

export default class LeftComponent extends React.Component{
    render(){
        return(
            <div className="left">

                <div className="left-top">I'm left-top</div>
                <div className="left-bottom">
                <h3>Trends</h3>
                <ul>
                    <li>#Pizza</li>
                    <li>#Trump</li>
                    <li>#RoyalBaby</li>
                    <li>#Boeing747</li>
                    <li>#Memes</li>
                    <li>#ThrowbackThursday</li>
                </ul>
                </div>

            </div>
        )
    }
}