import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as RectangleDrawingActions from "../../../../actions/editor/drawRect"
import {bindActionCreators} from 'redux';


class DrawRectComp extends Component {
  render() {
    return (
      <Button
        title={'Draw rectangle'}
        size={'sm'}
        variant={'default'}
        onClick={this.props.rectangleDrawingModeOn}
      >
        <FontAwesomeIcon icon="vector-square"/>
      </Button>
    )
  }
}


const mapProps = state => {
  return {...state.EditorReducer.drawRect}
};

const mapActions = dispatch => {
  return {...bindActionCreators(RectangleDrawingActions, dispatch)}
};


const DrawRect = connect(mapProps,mapActions)(DrawRectComp);


export default DrawRect