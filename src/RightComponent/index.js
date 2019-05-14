import React from 'react';
import './rightcomponent.css';

export default class RightComponent extends React.Component{
    render(){
        return(
            <div className="right">

                <div className="right-top">
                <h3>Who To Follow</h3>
                <ul>
                    <li><b>The Pope</b> @dapontiff</li>
                    <li><button>Follow</button></li>
                    <li><b>Ariana Grande</b> @therealarianagrande</li>
                    <li><button>Follow</button></li>
                    <li><b>Jimmy Carter</b> @jimmy-carti-b</li>
                    <li><button>Follow</button></li>
                </ul>
                </div>
                <div className="right-bottom">
                <h3>Live Video</h3>
                <iframe width="360" height="175" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        )
    }
}