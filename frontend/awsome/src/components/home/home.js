import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css"

import image from "../../assets/images/5240.svg"

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <br></br>
                        <br></br>

                        <div className="center">
                            <h1>Want to start investing<br></br>but don't know how?</h1>
                            <br></br>

                            <Link to="/register">
                                <Button variant="primary" >Get Started</Button>
                            </Link>

                            <br></br>
                            <br></br>
                            <img src={image} width="500vw"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}