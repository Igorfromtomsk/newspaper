import React, {Component} from 'react';
import classNames from "classnames";
import S from "./styles.module.css";
import {addNewGuide} from "../../../../actions/editor/gridSettings";
import {connect} from "react-redux";


class SmartGuidComp extends Component {
  constructor(props) {
    super(props);

    this.guide = React.createRef();
    this.state = {
      guide: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const {leftPadding, gridGuides} = this.props;
      const {left, top} = this.guide.current.getBoundingClientRect();
      const guide = {
        id: gridGuides.length,
        direction: 'horizontal',
        x: left - leftPadding,
        y: top - 60
      };

      this.props.addNewGuide(guide);
      this.setState({guide})
    }, 250);
  }

  render() {
    const {className} = this.props;
    const {x, y} = this.state.guide;

    return (
      <div
        ref={this.guide}
        className={classNames(S.guide, className)}
        style={{
          left: `${x}%`,
          top: `${y}px`
        }}
      />
    )
  }
}

const mapProps = state => {
  return {
    leftPadding: state.EditorReducer.present.gridSettings.leftPadding,
    rightPadding: state.EditorReducer.present.gridSettings.rightPadding,
    gridGuides: state.EditorReducer.present.gridSettings.gridGuides
  }
};

const mapActions = dispatch => {
  return {
    addNewGuide: guide => {dispatch(addNewGuide(guide))}
  }
};

const SmartGuide = connect(mapProps, mapActions)(SmartGuidComp);

export default SmartGuide;