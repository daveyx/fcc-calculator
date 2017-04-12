'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/style.css';

export default class Display extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return(
            <div className="display">
              {this.props.display}
            </div>
    );
  }
}
