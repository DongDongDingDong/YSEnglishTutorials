import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <html>
                <body>
                    <img src={require('./../images/femaleIcon.png')} alt="About me"/>
                    <div id="callId">Call 12345678910</div>
                </body>
            </html>
        )
    }
}