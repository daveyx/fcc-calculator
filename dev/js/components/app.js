'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/style.css';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="wrapper">
        <Grid className="content app">
          <Row>
            <Col xs={8} xsOffset={2}>
              <h1 className="text-center">
                Free Code Camp - JavaScript Calculator<br />
                <small>by <a href="http://www.daveyx.ga" target="_blank" title="daveyx">daveyx</a></small>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              <div className="main">


              </div>
            </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <hr />
                <footer className="text-center">
                  Sourcecode at github.com: <a href="https://github.com/daveyx/fcc-calculator" title="Sourcecode" target="_blank">click</a><br />
                  Demo at github.com: <a href="https://daveyx.github.io/fcc-calculator/" title="Demo" target="_blank">click</a>
                </footer>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
