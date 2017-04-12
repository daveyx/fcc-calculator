'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '../components/button';
import {clickButtonAction} from '../actions/index';
import {resetAction} from '../actions/index';

class ButtonContainer extends React.Component {
  render() {
    return(
      <Button value={this.props.value} clickHandler={this.props.clickButton} />
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    clickButton: clickButtonAction
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonContainer);
