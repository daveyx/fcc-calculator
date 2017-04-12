'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/style.css';

export default class Button extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return(
            <div className="button" onClick={this.props.clickHandler}>
              {this.props.value}
            </div>
    );
  }
}
