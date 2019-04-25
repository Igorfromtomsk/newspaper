import React, {Component} from 'react';
import S from './styles.module.css';
import * as RectangleDrawingActions from "../../../actions/editor/drawRect";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';


class WorkSpaceComp extends Component {
  constructor(props) {
    super(props);

    this.workSpaceInner = React.createRef();
    this.state = {drawingIsStarted: false};
    console.log(this.props)
  }

  getCoordinateX(e) {
    const relativeXCoordinate = this.workSpaceInner.current === e.target;

    let {width} = this.workSpaceInner.current.getBoundingClientRect();
    let {leftPadding} = this.props;

    let Coordinate = relativeXCoordinate ?
      e.nativeEvent.offsetX :
      leftPadding >= e.nativeEvent.offsetX ?
        (leftPadding - e.nativeEvent.offsetX) * -1 :
        e.nativeEvent.offsetX - leftPadding;

    return this.magnetizeCoordinateXToGuides(100 * Coordinate / width);
  }

  magnetizeCoordinateYToGuides(y) {
    if (!this.props.smartGuides) return y;

    this.props.layers.forEach(layer => {
      const {y1, y2} = layer.coords;
      const {captureRadius} = this.props;

      if (
        y >= y1 - captureRadius &&
        y < y1 + captureRadius
      ) {
        y = y1;
      }

      if (
        y >= y2 - captureRadius &&
        y < y2 + captureRadius
      ) {
        y = y2;
      }
    });

    return y;
  }

  magnetizeCoordinateXToGuides(x) {
    let {width} = this.workSpaceInner.current.getBoundingClientRect();
    let captureRadiusInPercent = 100 * this.props.captureRadius / width;

    this.props.gridGuides.forEach(guide => {
      if (
          x >= (guide.x - captureRadiusInPercent) &&
          x < (guide.x + captureRadiusInPercent)
      ) {
        x = guide.x;
      }
    });

    return x;
  }

  startDrawing(e) {
    let {layers} = this.props;

    let newLayer = {
      id: layers.length,
      coords: {
        x1: this.getCoordinateX(e),
        y1: this.magnetizeCoordinateYToGuides(e.nativeEvent.offsetY),
        x2: 0,
        y2: 0
      },
      width: 0,
      height: 0
    };

    this.props.startRectangleDrawing(newLayer);
  }
  
  
  stopDrawing() {
    this.props.saveRectangleDrawing()
  }


  draw(e) {
    e.stopPropagation();

    let {activeLayerId, layers} = this.props;
    let activeLayer = layers.filter(layer => layer.id === activeLayerId)[0];
    let y = this.magnetizeCoordinateYToGuides(e.nativeEvent.offsetY)

    activeLayer.coords.x2 = this.getCoordinateX(e);
    activeLayer.coords.y2 = y;
    activeLayer.width = Math.abs(this.getCoordinateX(e) - activeLayer.coords.x1);
    activeLayer.height = Math.abs(y - activeLayer.coords.y1);

    this.setState({layers: [...layers]});
  }


  render() {
    const {drawingModeOn, layers, drawingIsStarted, leftPadding, rightPadding} = this.props;
    let {width} = this.workSpaceInner.current ? this.workSpaceInner.current.getBoundingClientRect() : 1;
    let onePixelInPercent = 100 / width;

    return (
      <div
        className={S.workSpace}
        style={{
          cursor: drawingModeOn ? 'cell' : 'default',
          paddingLeft: `${leftPadding}px`,
          paddingRight: `${rightPadding}px`
        }}
        onMouseDown={drawingModeOn ? this.startDrawing.bind(this) : null}
        onMouseMove={drawingIsStarted ? this.draw.bind(this) : null}
        onMouseUp={drawingIsStarted ? this.stopDrawing.bind(this) : null}
      >
        <div
          className={S.workSpaceInner}
          ref={this.workSpaceInner}
        >
          {layers.map(layer => (<div
            className={S.rectangle}
            key={layer.id}
            style={{
              left: `${layer.coords.x1 < layer.coords.x2 ? layer.coords.x1 : layer.coords.x2}%`,
              top: `${layer.coords.y1 < layer.coords.y2 ? layer.coords.y1 : layer.coords.y2}px`,
              width: `${onePixelInPercent + layer.width}%`,
              height: `${layer.height}px`,
              pointerEvents: drawingIsStarted ? 'none' : 'auto'
            }}
          />))}
        </div>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    ...state.EditorReducer.gridSettings,
    ...state.EditorReducer.drawRect.present
  }
};

const mapActions = dispatch => {
  return {...bindActionCreators(RectangleDrawingActions, dispatch)}
};


const WorkSpace = connect(mapProps, mapActions)(WorkSpaceComp);


export default WorkSpace