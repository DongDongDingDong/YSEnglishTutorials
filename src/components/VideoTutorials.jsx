import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './VideoTutorials.css';

export default class VideoTutorials extends Component {
    render() {
        return (
            <html>
                <body>      
                    <Link to="VideoTutorials">
                        <div className="wrapper">
                            <div className='btn'>
                                <button2 type='button' id="buttonVideo">Learn English</button2>
                            </div>
                        </div>
                    </Link>
                    {/* <div class="wrapper">
                            <div class='btn'>
                                <button type='button2' id="buttonVideo">Learn Korean</button>
                            </div>
                        </div> */}
                </body>
            </html>
        )
    }
}