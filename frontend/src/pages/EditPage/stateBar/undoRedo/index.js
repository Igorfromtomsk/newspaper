import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {redo, undo} from "../../../../actions/editor";
import {connect} from "react-redux";


class UndoRedoComp extends Component {
  render() {
    return (
      <>
        <Button
          onClick={this.props.undo}
          size={'sm'}
          variant={'default'}
        >
          <FontAwesomeIcon icon={'undo'}/>
        </Button>
        <Button
          onClick={this.props.redo}
          size={'sm'}
          variant={'default'}
        >
          <FontAwesomeIcon icon={'redo'}/>
        </Button>
      </>
    )
  }
}


const mapProps = () => {
  return {}
};

const mapActions = dispatch => {
  return {
    undo: () => { dispatch(undo()) },
    redo: () => { dispatch(redo()) }
  }
};


const UndoRedo = connect(mapProps, mapActions)(UndoRedoComp);


export default UndoRedo