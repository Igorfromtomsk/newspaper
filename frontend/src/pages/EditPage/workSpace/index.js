import React, {Component} from 'react';
import S from './styles.module.css';
import * as RectangleDrawingActions from "../../../actions/editor/drawRect";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';


class WorkSpaceComp extends Component {
  constructor(props) {
    super(props);

    this.workSpaceInner = React.createRef();
    this.state = {
      drawingIsStarted: false,
      activeLayer: null
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', handler);

    function handler(e) {
      if (e.keyCode === 27 && this.state.drawingIsStarted) {
        this.setState({drawingIsStarted: false});
      }
    }
  }

  getCoordinateX(e) {
    const relativeXCoordinate = this.workSpaceInner.current === e.target;

    let {leftPadding} = this.props;

    let Coordinate = relativeXCoordinate ?
      e.nativeEvent.offsetX :
      leftPadding >= e.nativeEvent.offsetX ?
        (leftPadding - e.nativeEvent.offsetX) * -1 :
        e.nativeEvent.offsetX - leftPadding;

    return this.magnetizeCoordinateXToGuides(Coordinate);
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
    let captureRadiusInPercent = this.props.captureRadius;

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

    this.setState({
      drawingIsStarted: true,
      activeLayer: newLayer
    });
  }

  drawing(e) {
    e.stopPropagation();

    let {activeLayer} = this.state;
    let y = this.magnetizeCoordinateYToGuides(e.nativeEvent.offsetY);

    this.setState({
      activeLayer: {
        ...activeLayer,
        coords: {
          ...activeLayer.coords,
          x2: this.getCoordinateX(e),
          y2: y
        },
        width: Math.abs(this.getCoordinateX(e) - activeLayer.coords.x1),
        height: Math.abs(y - activeLayer.coords.y1)
      }
    });
  }

  stopDrawing() {
    this.props.saveRectangleDrawing(this.state.activeLayer);
    this.setState({
      drawingIsStarted: false,
      activeLayer: null
    });
  }

  render() {
    const {drawingModeOn, layers, leftPadding, rightPadding} = this.props;
    const {drawingIsStarted, activeLayer} = this.state;

    let onePixelInPercent = 1;

    return (
      <div
        className={S.workSpace}
        style={{
          cursor: drawingModeOn ? 'cell' : 'default',
          paddingLeft: `${leftPadding}px`,
          paddingRight: `${rightPadding}px`
        }}
        onClick={this.props.onClick}
        onMouseDown={drawingModeOn ? this.startDrawing.bind(this) : null}
        onMouseMove={drawingIsStarted ? this.drawing.bind(this) : null}
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
              left: `${layer.coords.x1 < layer.coords.x2 ? layer.coords.x1 : layer.coords.x2}px`,
              top: `${layer.coords.y1 < layer.coords.y2 ? layer.coords.y1 : layer.coords.y2}px`,
              width: `${onePixelInPercent + layer.width}px`,
              height: `${layer.height}px`,
              pointerEvents: drawingIsStarted ? 'none' : 'auto'
            }}
          />))}
          {
            activeLayer ? (
              <div
                className={S.rectangle}
                style={{
                  left: `${activeLayer.coords.x1 < activeLayer.coords.x2 ? activeLayer.coords.x1 : activeLayer.coords.x2}px`,
                  top: `${activeLayer.coords.y1 < activeLayer.coords.y2 ? activeLayer.coords.y1 : activeLayer.coords.y2}px`,
                  width: `${onePixelInPercent + activeLayer.width}px`,
                  height: `${activeLayer.height}px`,
                  pointerEvents: drawingIsStarted ? 'none' : 'auto'
                }}
              />
            ) : null
          }
        </div>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    ...state.EditorReducer.present.gridSettings,
    ...state.EditorReducer.present.drawRect
  }
};

const mapActions = dispatch => {
  return {...bindActionCreators(RectangleDrawingActions, dispatch)}
};


const WorkSpace = connect(mapProps, mapActions)(WorkSpaceComp);


export default WorkSpace