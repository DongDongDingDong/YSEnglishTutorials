import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
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
                            {/* <h2>W</h2>
                            <p>sex </p> */}
                    <Link to="VideoTutorials">
                        <div className="wrapper">
                            <div className='btn'>
                                <button type='button' id="buttonVideo">Video Tutorials</button>
                            </div>
                        </div>
                    </Link>

                        {/* <Row className="show-grid text-center"> */}
                            {/* <Col xs="12" sm="3" className="person-wrapper">
                                <Image src="assets/demo2.jpg" circle className="profile-pic" />
                                <h3>Frank</h3>
                                <p>vearinvoia vav a dva vaw evaw ev aw v aerdg aer gae rg aref ae.</p>
                            </Col>
                            <Col xs="12" sm="3" className="person-wrapper">
                                <Image src="assets/demo1.jpg" circle className="profile-pic" />
                                <h3>Frank</h3>
                                <p>vearinvoia vav a dva vaw evaw ev aw v aerdg aer gae rg aref ae.</p>
                            </Col>
                            <Col xs="12" sm="3" className="person-wrapper">
                                <Image src="assets/demo3.jpg" circle className="profile-pic" />
                                <h3>Frank</h3>
                                <p>vearinvoia vav a dva vaw evaw ev aw v aerdg aer gae rg aref ae.</p>
                            </Col> */}
                        {/* </Row> */}
                </body>
            </html>
        )
    }
}