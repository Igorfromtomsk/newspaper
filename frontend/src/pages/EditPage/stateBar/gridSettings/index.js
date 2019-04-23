import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Popover, OverlayTrigger, Button, Form} from 'react-bootstrap';
import Checkbox from '../../../../components/_shared/checkbox';


import {
  toggleGridVisibility,
  changeColumnsAmount,
  changeColumnsOffset
} from "../../../../actions/editor/gridSettings";
import {connect} from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class GridSettingsComp extends Component {
  constructor(props) {
    super(props);

    this.colAmountInput = React.createRef();
    this.colOffsetInput = React.createRef();
  }

  changeColumnsAmount(e) {
    if (+e.target.value < 1) {
      this.colAmountInput.current.value = 1;
    } else {
      this.props.changeColumnsAmount(+e.target.value);
    }
  }

  changeColumnsOffset(e) {
    this.props.changeColumnsOffset(+e.target.value);
  }

  render() {
    const {gridIsHidden, columnsAmount, columnsOffset} = this.props;
    const popover = (
      <Popover id="popover-basic" title="Grid settings">
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={8}>Show grid</Form.Label>
            <Col sm={4}>
              <Checkbox
                style={{'marginTop': '0.4rem'}}
                checked={!gridIsHidden}
                onChange={this.props.toggleGridVisibility}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={8}>Amount of columns</Form.Label>
            <Col sm={4}>
              <Form.Control
                onWheel={() => {}}
                onChange={this.changeColumnsAmount.bind(this)}
                size={'sm'}
                type={'number'}
                defaultValue={columnsAmount}
                ref={this.colAmountInput}
                min={1}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={8}>Offset between columns</Form.Label>
            <Col sm={4}>
              <Form.Control
                onChange={this.changeColumnsOffset.bind(this)}
                size={'sm'}
                type={'number'}
                defaultValue={columnsOffset}
                ref={this.colOffsetInput}
                min={1}
              />
            </Col>
          </Form.Group>
        </Form>
      </Popover>
    );

    return (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popover}
        rootClose={true}
      >
        <Button
          title={'Grid settings'}
          size={'sm'}
          variant={'default'}
        >
          <FontAwesomeIcon icon="th" />
        </Button>
      </OverlayTrigger>
    )
  }
}

const mapProps = state => {
  return {
    ...state.EditorReducer.gridSettings
  }
};

const mapAction = dispatch => {
  return {
    toggleGridVisibility: () => {dispatch(toggleGridVisibility())},
    changeColumnsAmount: amount => {dispatch(changeColumnsAmount(amount))},
    changeColumnsOffset: offset => {dispatch(changeColumnsOffset(offset))}
  }
};

const GridSettings = connect(mapProps, mapAction)(GridSettingsComp);

export default GridSettings;