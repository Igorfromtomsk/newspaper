import React, {Component} from 'react';
import classNames from "classnames";
import S from "../styles.module.css";
import {addNewGuide} from "../../../../actions/editor/gridSettings";
import {connect} from "react-redux";


class GuidComp extends Component {
  constructor(props) {
    super(props);

    this.guide = React.createRef();
    this.state = {
      guide: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const {leftPadding, rightPadding, gridGuides} = this.props;
      const {left, top} = this.guide.current.getBoundingClientRect();
      const {width} = this.guide.current.closest('.js-guide-wrapper').getBoundingClientRect();
      const guide = {
        id: gridGuides.length,
        direction: 'horizontal',
        x: 100 * (left - leftPadding) / (width - leftPadding - rightPadding),
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
    leftPadding: state.EditorReducer.gridSettings.leftPadding,
    rightPadding: state.EditorReducer.gridSettings.rightPadding,
    gridGuides: state.EditorReducer.gridSettings.gridGuides
  }
};

const mapActions = dispatch => {
  return {
    addNewGuide: guide => {dispatch(addNewGuide(guide))}
  }
};

const Guide = connect(mapProps, mapActions)(GuidComp);

export default Guide;