import React, {Component} from 'react';
import S from './styles.module.css';
import * as RectangleDrawingActions from "../../../actions/editor/layers";
import {showSmartGuide, hideSmartGuide} from "../../../actions/editor/gridSettings";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Layer from "./layer";


class WorkSpaceComp extends Component {
  constructor(props) {
    super(props);

    this.workSpaceInner = React.createRef();
    this.state = {
      drawingIsStarted: false,
      activeLayer: null,
      newLayerId: null
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

    let showSG = false;
    let x, width;

    this.props.layers.forEach(layer => {
      const {y1, y2, x1, x2} = layer.coords;
      const {captureRadius} = this.props;
      x = x1 < x2 ? x2 : x1;

      if (
        y >= y1 - captureRadius &&
        y < y1 + captureRadius
      ) {
        y = y1;
        showSG = true;
      }

      if (
        y >= y2 - captureRadius &&
        y < y2 + captureRadius
      ) {
        y = y2;
        showSG = true;
      }
    });

    if (showSG) {
      if (this.state.activeLayer) {
        width = Math.abs(this.state.activeLayer.coords.x2 - x);

        x = this.state.activeLayer.coords.x2 > x ? x : this.state.activeLayer.coords.x2;
      }
      this.props.showSmartGuide({x, y, width});
    } else {
      this.props.hideSmartGuide();
    }

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
    let {layers, layerType} = this.props;

    this.setState({
      drawingIsStarted: true,
      activeLayer: {
        id: layers.length,
        coords: {
          x1: this.getCoordinateX(e),
          y1: this.magnetizeCoordinateYToGuides(e.nativeEvent.offsetY),
          x2: 0,
          y2: 0
        },
        data: '',
        type: layerType,
        width: 0,
        height: 0
      }
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
    this.props.hideSmartGuide();
    this.setState({
      drawingIsStarted: false,
      activeLayer: null,
      newLayerId: this.state.activeLayer.id
    });
  }

  stopEditingNewLayer() {
    this.setState({newLayerId: null});
  }

  render() {
    const {drawingModeOn, layers, leftPadding, rightPadding} = this.props;
    const {drawingIsStarted, activeLayer, newLayerId} = this.state;

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
          {layers.map(layer => (
            <Layer
              layer={layer}
              key={layer.id}
              updateLayer={this.props.updateLayer}
              newLayerId={newLayerId}
              stopEditingNewLayer={this.stopEditingNewLayer.bind(this)}
              drawingIsStarted={drawingIsStarted}
            />
          ))}
          {activeLayer ? (
            <Layer
              layer={activeLayer}
              drawingIsStarted={drawingIsStarted}
              newLayer={true}
            />
          ) : null}
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
  return {
    ...bindActionCreators(RectangleDrawingActions, dispatch),
    showSmartGuide: coords => {
      dispatch(showSmartGuide(coords))
    },
    hideSmartGuide: () => {
      dispatch(hideSmartGuide())
    }
  }
};


const WorkSpace = connect(mapProps, mapActions)(WorkSpaceComp);


export default WorkSpace