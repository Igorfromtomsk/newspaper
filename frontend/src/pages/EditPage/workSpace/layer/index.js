import React, {Component} from 'react';
import S from "../styles.module.css";


export default class Layer extends Component {
  componentDidMount() {
  }

  textFieldIFrameIsLoaded(e) {
    let {target} = e;

    target.contentDocument.open();
    target.contentDocument.write(`<html style="width: 100%; height: 100%"><head></head><body></body></html>&nbsp;`);
    target.contentDocument.close();

    target.contentDocument.designMode = 'on';
    target.focus();
  }

  getInnerHtml() {
    let {layer} = this.props;
    switch (layer.type) {
      case 'text':
        return (
          <iframe
            title={`Text field number ${layer.id}`}
            // src={`javascript: document.domain = ${document.domain};`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              position: 'relative',
              zIndex: '1'
            }}
            onLoad={this.textFieldIFrameIsLoaded.bind(this)}
          />
        );
      case 'rectangle':
      default:
        return null;
    }
  }

  render() {
    let {layer, drawingIsStarted} = this.props;

    return (
      <div
        className={S[layer.type]}
        style={{
          left: `${layer.coords.x1 < layer.coords.x2 ? layer.coords.x1 : layer.coords.x2}px`,
          top: `${layer.coords.y1 < layer.coords.y2 ? layer.coords.y1 : layer.coords.y2}px`,
          width: `${1 + layer.width}px`,
          height: `${layer.height}px`,
          pointerEvents: drawingIsStarted ? 'none' : 'auto'
        }}
      >
        {this.getInnerHtml()}
      </div>
    )
  }
}