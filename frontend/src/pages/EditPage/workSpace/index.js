import React, {Component} from 'react';
import S from './styles.module.css';
import * as RectangleDrawingActions from "../../../actions/editor/drawRect";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';


class WorkSpaceComp extends Component {
  constructor(props) {
    super(props);

    this.workSpaceInner = React.createRef();
    this.state = {drawingIsStarted: false}
  }

  startDrawing(e) {
    let {layers} = this.props;
    let {width} = this.workSpaceInner.current.getBoundingClientRect();

    let newLayer = {
      id: layers.length,
      left: 100 * e.nativeEvent.offsetX / width,
      top: e.nativeEvent.offsetY,
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
    let {width} = this.workSpaceInner.current.getBoundingClientRect();

    let activeLayer = layers.filter(layer => layer.id === activeLayerId)[0];

    activeLayer.width = 100 * e.nativeEvent.offsetX / width - activeLayer.left;
    activeLayer.height = e.nativeEvent.offsetY - activeLayer.top;

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
              left: `${layer.left}%`,
              top: `${layer.top}px`,
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