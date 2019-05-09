import React from 'react';
import './leftcomponent.css';

export default class LeftComponent extends React.Component{
    render(){
        return(
            <div className="left">

                <div className="left-top">I'm left-top</div>
                <div className="left-bottom">I'm left-bottom</div>

            </div>
        )
    }
}