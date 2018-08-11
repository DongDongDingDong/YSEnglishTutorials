import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


export default class News extends Component {
    render() {
        return (
            <html>
                <body>
                    <div>Hello there</div>
                        <Row className="show-grid text-center">
                            <Col xs="12" sm="3" className="person-wrapper">
                                <Image src={require('../images/demo2.jpg')} circle className="profile-pic" width="200" height="200"/>
                                <h3>Frank</h3>
                                <p>“Hi, my name is Joe Doe and I [have the most boring job in the most boring company]”</p>
                            </Col>
                            <Col xs="12" sm="3" className="person-wrapper">
                                <Image src={require('../images/bby2.jpeg')} circle className="profile-pic" width="200" height="200"/>
                                <h3>Frank</h3>
                                <p>“Hi, my name is Riley and I [have the most boring job in the most boring company]”.</p>
                            </Col>
                            <Col xs="12" sm="3" className="person-wrapper">
                                <Image src={require('../images/babe12.jpeg')} circle className="profile-pic" width="200" height="200"/>
                                <h3>Frank</h3>
                                <p>“Hi, my name is Yesul and I [have the most boring job in the most boring company]”</p>
                            </Col>
                        </Row>
                </body>
            </html>
        )
    }
}