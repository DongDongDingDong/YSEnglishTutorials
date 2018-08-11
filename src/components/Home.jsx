import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state={
            title: "Welcome Everyone!"
        }
    }
    buttonClicked() {
        console.log(this);
    }
    render() {
        return (
            <html>
                <body>      
                            <h2>Welcome students</h2>
                            <p>The English Department has a pivotal role to play within the School, providing the means for students <br />
                                      to reach an advanced level of proficiency in English, as a support subject <br />
                                        or other departments, as well as to promote a greater sensitivity <br />
                                 to the literary and cultural traditions of the language in a global context.</p>

                    <Link to="VideoTutorials">
                        <div class="">
                            {/* <span class="tooltiptext"></span> */}
                            <div class='btn'>
                                <button type='button' id="buttonVideo">Video Tutorials</button>
                            </div>
                        </div>
                    </Link>
                </body>
            </html>
        )
    }
}