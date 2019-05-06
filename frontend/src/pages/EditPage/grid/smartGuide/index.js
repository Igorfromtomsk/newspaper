import React, {Component} from 'react';
import S from "./styles.module.css";
import {addNewGuide} from "../../../../actions/editor/gridSettings";
import {connect} from "react-redux";


class SmartGuidComp extends Component {
  componentDidMount() {}

  render() {
    const {x, y, width} = this.props.gridSmartGuide.coords;
    const {shown} = this.props.gridSmartGuide;
    const {leftPadding} = this.props;

    return shown ? (
      <div
        className={S.smartGuide}
        style={{
          left: `${x + leftPadding}px`,
          top: `${y}px`,
          width: `${width}px`
        }}
      />
    ) : null
  }
}

const mapProps = state => {
  return {
    leftPadding: state.EditorReducer.present.gridSettings.leftPadding,
    gridSmartGuide: state.EditorReducer.present.gridSettings.gridSmartGuide
  }
};

const mapActions = dispatch => {
  return {
    addNewGuide: guide => {dispatch(addNewGuide(guide))}
  }
};

const SmartGuide = connect(mapProps, mapActions)(SmartGuidComp);

export default SmartGuide;