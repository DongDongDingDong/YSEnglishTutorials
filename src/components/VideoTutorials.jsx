import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './VideoTutorials.css';
import EnglishVideos from './EnglishVideos';

export default class VideoTutorials extends Component {
    constructor(props) {
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
        this.showPasswordPage = this.showPasswordPage.bind(this);
        this.state = {
            buttonTitleEnglish: 'Learn English',
            buttonTitleKorean: 'Learn Korean',
            showPassword: false
        };
    };

    changeTitle() {
        alert("Hello");
        this.setState({
            buttonTitleEnglish: 'Learn Arab',
            buttonTitleKorean: 'Learn Brazilian'
        });
    };
    showPasswordPage() {
        this.setState({showPassword: true });
      };
    render() {
            const Child = (
                // <div id="bum1"> Hello, World!</div>
                <body>
                    <div>Grammar 101</div>
                    <iframe width="420" height="315" title="Grammar101"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <div>Grammar 102</div>
                    <iframe width="420" height="315" title="Grammar101"
                        src="https://www.youtube.com/embed/5aZI-jukT5E">
                    </iframe>
                    <div>Grammar 103</div>
                    <iframe width="420" height="315" title="Grammar101"
                        src="https://www.youtube.com/embed/rE9_zBpNbps">
                    </iframe>
                </body>

            );
            const Parent = (
                <div id="bum2"> </div>
            );
        return (
            <html>
                <body>   
                    <div>{this.state.showPassword ? Child : "Click Button for load Videos"}
                        </div>
                        {/* <div className="wrapper">
                            <div className='btn'>
        <button2 type='button' id="buttonVideo" onClick={this.myFunction}>Learn English</button2>
                            </div>
                        </div>  */}
                        <div className="wrapper">
                            <div className='btn'>
        <button2 type='button' id="buttonVideo" onClick={this.showPasswordPage}>Learn English</button2>
                            </div>
                        </div>
                    <div className="wrapper">
                            <div className='btn'>
                                <button3 type='button' id="buttonVideo">{this.state.buttonTitleKorean}</button3>
                            </div>
                        </div>
                </body>
            </html>
        )
    }
}