import React, {Component} from 'react';
import S from "./styles.module.css";
import classNames from 'classnames';
import {getNewDocumentStyles} from '../../../../utils/newDocumentStyles';

export default class Layer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingMode: false,
      listener: this.turnOffEditingMode.bind(this)
    };
    this.layer = React.createRef();
    this.editedLayer = React.createRef();
  }

  componentDidMount() {
    if (this.props.newLayerId === this.props.layer.id && !this.props.newLayer && !this.props.drawingIsStarted) {
      this.turnOnEditingMode();
    }
  }

  textFieldIFrameIsLoaded(e) {
    let {target} = e;
    let newDocumentStyles = getNewDocumentStyles();

    target.contentDocument.open();
    target.contentDocument.write(`<html><head><style>${newDocumentStyles}</style></head><body>${this.props.layer.data}</body></html>`);
    target.contentDocument.close();

    target.contentDocument.designMode = 'on';
    target.focus();
  }

  getHtml() {
    let {layer} = this.props;

    switch (layer.type) {
      case 'text':
        return (
          <iframe
            title={`Text field number ${layer.id}`}
            ref={this.editedLayer}
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

  turnOffEditingMode(e) {
    let data = '';

    switch (this.props.layer.type) {
      case 'text':
        data = this.editedLayer.current.contentDocument.body.innerHTML;
        break;
      case 'rectangle':
        break;
      default:
        break;
    }

    if (e.target !== this.layer.current) {
      this.props.updateLayer({
        ...this.props.layer,
        data
      });

      this.setState({editingMode: false});
      document.removeEventListener('click', this.state.listener, false);

      if (this.props.newLayerId === this.props.layer.id) {
        this.props.stopEditingNewLayer();
      }
    }
  }

  turnOnEditingMode() {
    this.setState({editingMode: true});
    setTimeout(() => {
      document.addEventListener('click', this.state.listener, false);
    }, 10);
  }

  render() {
    let {layer, drawingIsStarted, newLayer} = this.props;
    let {editingMode} = this.state;
    let className = classNames(
      S.layer,
      S[layer.type],
      editingMode ? S.editingMode : '',
      newLayer ? S.newLayer : ''
    );

    return (
      <div
        className={className}
        onClick={this.turnOnEditingMode.bind(this)}
        ref={this.layer}
        style={{
          left: `${layer.coords.x1 < layer.coords.x2 ? layer.coords.x1 : layer.coords.x2}px`,
          top: `${layer.coords.y1 < layer.coords.y2 ? layer.coords.y1 : layer.coords.y2}px`,
          width: `${1 + layer.width}px`,
          height: `${layer.height}px`,
          pointerEvents: drawingIsStarted ? 'none' : 'auto'
        }}
      >
        {this.getHtml()}
      </div>
    )
  }
}