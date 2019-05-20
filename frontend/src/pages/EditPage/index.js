import React, {Component} from 'react';
import {connect} from "react-redux";
import S from './styles.module.css';
import classNames from 'classnames';


import {showFooter, hideFooter} from "../../actions/generalActions";
import {resize, changeLeftPadding, changeRightPadding} from "../../actions/editor/gridSettings";
import {undo} from '../../actions/editor';


import UserBar from './userBar';
import StateBar from './stateBar';
import WorkSpace from './workSpace';
import Grid from './grid';


class EditPageComp extends Component {
  constructor(props) {
    super(props);

    this.state = { drawingModeOn: false };
    this.workPlace = React.createRef();

    this.state = {
      hold: null
    }
  }

  componentDidMount() {
    document.title = `${process.env.REACT_APP_TITLE} | Editor`;
    this.props.hideFooter();

    document.onkeydown = this.keyDown.bind(this);
    document.onkeyup = this.keyUp.bind(this);
    window.onresize = this.resize.bind(this);
  }

  keyUp(event) {
    switch(event.keyCode) {
      case 17:
        this.setState({hold: null});
        break;

      default:
        break;
    }
  }

  keyDown(event) {
    console.log('//keyCode: ', event.keyCode)
    switch (event.keyCode) {
      case 27:
        this.turnOffRectDrawMode();
        break;

      case 17:
        this.setState({hold: 17})
        break;

      default:
        break;
    }

    if (this.state.hold) {
      switch (this.state.hold) {
        case 17:
          this.ctrlActions(event);
          break;

        default:
          break;
      }
    }
  }

  ctrlActions(event) {
    switch (event.keyCode) {
      case 90:
        this.props.undo();
        break;

      case 82:
        event.preventDefault();
        this.turnOnRectDrawMode();
        break;

      default:
        break;
    }
  }

  resize() {
    const {windowWidth, samePadding, leftPadding, rightPadding, width} = this.props;
    let definition = windowWidth - width;

    let newLeftPadding = samePadding ? definition / 2 : definition / (leftPadding + rightPadding) * leftPadding;
    let newRightPadding = samePadding ? definition / 2 : definition / (leftPadding + rightPadding) * rightPadding;

    this.props.resize(window.innerWidth);
    this.props.changeLeftPadding(newLeftPadding);
    this.props.changeRightPadding(newRightPadding);
  }

  componentWillUnmount() {
    this.props.showFooter();
  }

  turnOffRectDrawMode() {
    this.setState({drawingModeOn: false, layerType: null});
  }

  turnOnRectDrawMode(layerType) {
    this.setState({drawingModeOn: true, layerType});
  }

  render() {
    return (
      <div className={classNames(S.editor, S.fGrow, S.dFlex, S.dColumn)}>
        <StateBar />
        <div className={classNames(S.fGrow, S.dFlex)}>
          <UserBar
            turnOnRectDrawMode={this.turnOnRectDrawMode.bind(this)}
          />
          <WorkSpace
            ref={this.workPlace}
            drawingModeOn={this.state.drawingModeOn}
            layerType={this.state.layerType}
            onClick={this.turnOffRectDrawMode.bind(this)}
          />
        </div>
        <Grid/>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    general: state.GeneralReducer,
    ...state.EditorReducer.gridSettings
  }
};


const mapActions = dispatch => {
  return {
    showFooter: () => {dispatch(showFooter())},
    hideFooter: () => {dispatch(hideFooter())},
    resize: (width) => {dispatch(resize(width))},
    changeLeftPadding: leftPadding => {dispatch(changeLeftPadding(leftPadding))},
    changeRightPadding: rightPadding => {dispatch(changeRightPadding(rightPadding))},
    undo: () => {dispatch(undo())}
  }
};


const EditPage = connect(mapProps, mapActions)(EditPageComp);


export default EditPage;