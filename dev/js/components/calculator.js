'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../css/style.css';
import Display from './display';
import Button from './button';

export default class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return(
            <div className="main">
              <Row>
                <Col xs={12}>
                  <Display />
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Button />
                </Col>
                <Col xs={4}>
                  <Button />
                </Col>
                <Col xs={4}>
                  <Button />
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Button />
                </Col>
                <Col xs={4}>
                  <Button />
                </Col>
                <Col xs={4}>
                  <Button />
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Button />
                </Col>
                <Col xs={4}>
                  <Button />
                </Col>
                <Col xs={4}>
                  <Button />
                </Col>
              </Row>
            </div>
    );
  }
}
