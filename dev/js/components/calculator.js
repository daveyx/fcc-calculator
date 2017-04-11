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
                <Col xs={6}>
                  <Button value="AC" />
                </Col>
                <Col xs={6}>
                  <Button value="CE" />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Button value="7" />
                </Col>
                <Col xs={3}>
                  <Button value="8" />
                </Col>
                <Col xs={3}>
                  <Button value="9" />
                </Col>
                <Col xs={3}>
                  <Button value="/" />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Button value="4" />
                </Col>
                <Col xs={3}>
                  <Button value="5" />
                </Col>
                <Col xs={3}>
                  <Button value="6" />
                </Col>
                <Col xs={3}>
                  <Button value="*" />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Button value="1" />
                </Col>
                <Col xs={3}>
                  <Button value="2" />
                </Col>
                <Col xs={3}>
                  <Button value="3" />
                </Col>
                <Col xs={3}>
                  <Button value="-" />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Button value="0" />
                </Col>
                <Col xs={3}>
                  <Button value="." />
                </Col>
                <Col xs={3}>
                  <Button value="=" />
                </Col>
                <Col xs={3}>
                  <Button value="+" />
                </Col>
              </Row>
            </div>
    );
  }
}
