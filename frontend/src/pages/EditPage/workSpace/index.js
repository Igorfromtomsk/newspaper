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
  }

  getCoordinate(e) {
    let {width} = this.workSpaceInner.current.getBoundingClientRect();
    let {leftPadding} = this.props;
    const relativeXCoordinate = this.workSpaceInner.current === e.target;
    const xCoordinate = relativeXCoordinate ?
      e.nativeEvent.offsetX :
      leftPadding >= e.nativeEvent.offsetX ?
        (leftPadding - e.nativeEvent.offsetX) * -1 :
        e.nativeEvent.offsetX - leftPadding;

    return 100 * xCoordinate / width;
  }

  startDrawing(e) {
    let {layers} = this.props;

    let newLayer = {
      id: layers.length,
      coords: {
        x1: this.getCoordinate(e),
        y1: e.nativeEvent.offsetY,
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

    activeLayer.coords.x2 = this.getCoordinate(e);
    activeLayer.coords.y2 = e.nativeEvent.offsetY;
    activeLayer.width = Math.abs(this.getCoordinate(e) - activeLayer.coords.x1);
    activeLayer.height = Math.abs(e.nativeEvent.offsetY - activeLayer.coords.y1);

    this.setState({layers: [...layers]});
  }


  render() {
    const {drawingModeOn, layers, drawingIsStarted, leftPadding, rightPadding} = this.props;

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
              left: `${Math.abs(layer.coords.x1) <= Math.abs(layer.coords.x2) ? layer.coords.x1 : layer.coords.x2}%`,
              top: `${layer.coords.y1 <= layer.coords.y2 ? layer.coords.y1 : layer.coords.y2}px`,
              width: `${layer.width}%`,
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
    ...state.EditorReducer.drawRect
  }
};

const mapActions = dispatch => {
  return {...bindActionCreators(RectangleDrawingActions, dispatch)}
};


const WorkSpace = connect(mapProps, mapActions)(WorkSpaceComp);


export default WorkSpace