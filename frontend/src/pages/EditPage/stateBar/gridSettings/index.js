import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Popover, OverlayTrigger, Button, Form} from 'react-bootstrap';
import Checkbox from '../../../../components/_shared/checkbox';
import {bindActionCreators} from 'redux';


import * as GridSettingsActions from "../../../../actions/editor/gridSettings";
import {connect} from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class GridSettingsComp extends Component {
  constructor(props) {
    super(props);

    this.colAmountInput = React.createRef();
    this.colOffsetInput = React.createRef();
    this.leftPaddingInput = React.createRef();
    this.rightPaddingInput = React.createRef();
    this.widthInput = React.createRef();

    this.state = {
      leftColumn: 7,
      rightColumn: 5
    }
  }

  changeColumnsAmount(e) {
    this.props.changeColumnsAmount(+e.target.value);
  }

  changeColumnsOffset(e) {
    this.props.changeColumnsOffset(+e.target.value);
  }

  changeBothOffsets(e) {
    this.props.changeLeftPadding(+e.target.value);
    this.props.changeRightPadding(+e.target.value);
  }

  changeLeftPadding(e) {
    this.props.changeLeftPadding(+e.target.value);
  }

  changeRightPadding(e) {
    this.props.changeRightPadding(+e.target.value);
  }

  changeWidth(e) {
    const {windowWidth, samePadding, leftPadding, rightPadding} = this.props;
    let definition = windowWidth - e.target.value;

    let newLeftPadding = samePadding ? definition / 2 : definition / (leftPadding + rightPadding) * leftPadding;
    let newRightPadding = samePadding ? definition / 2 : definition / (leftPadding + rightPadding) * rightPadding;

    this.props.changeWidth(+e.target.value);
    this.props.changeLeftPadding(newLeftPadding);
    this.props.changeRightPadding(newRightPadding);
  }

  getPaddingSettings() {
    const {leftColumn, rightColumn} = this.state;
    const {leftPadding, rightPadding, samePadding} = this.props;

    return samePadding ? null : (
      <>
        <Form.Group as={Row}>
          <Form.Label column sm={leftColumn}>Left grid padding</Form.Label>
          <Col sm={rightColumn}>
            <Form.Control
              onChange={this.changeLeftPadding.bind(this)}
              size={'sm'}
              type={'number'}
              defaultValue={leftPadding}
              ref={this.leftPaddingInput}
              min={1}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={leftColumn}>Right grid offset</Form.Label>
          <Col sm={rightColumn}>
            <Form.Control
              onChange={this.changeRightPadding.bind(this)}
              size={'sm'}
              type={'number'}
              defaultValue={rightPadding}
              ref={this.rightPaddingInput}
              min={1}
            />
          </Col>
        </Form.Group>
      </>
    )
  }

  render() {
    const {
      gridIsHidden,
      columnsAmount,
      columnsOffset,
      samePadding,
      width
    } = this.props;

    const {leftColumn, rightColumn} = this.state;

    const popover = (
      <Popover id="popover-basic" title="Grid settings" className={['large-popover', 'grid-settings']}>
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group as={Row}>
                <Form.Label column sm={leftColumn}>Show grid</Form.Label>
                <Col sm={rightColumn}>
                  <Checkbox
                    style={{'marginTop': '0.4rem'}}
                    checked={!gridIsHidden}
                    onChange={this.props.toggleGridVisibility}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={leftColumn}>Amount of columns</Form.Label>
                <Col sm={rightColumn}>
                  <Form.Control
                    onWheel={() => {
                    }}
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
                <Form.Label column sm={leftColumn}>Offset between columns</Form.Label>
                <Col sm={rightColumn}>
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
            </Col>
            <Col sm={6}>
              <Form.Group as={Row}>
                <Form.Label column sm={leftColumn}>Same offsets</Form.Label>
                <Col sm={rightColumn}>
                  <Checkbox
                    style={{'marginTop': '0.4rem'}}
                    checked={samePadding}
                    onChange={this.props.toggleSamePadding}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={leftColumn}>Width</Form.Label>
                <Col sm={rightColumn}>
                  <Form.Control
                    onChange={this.changeWidth.bind(this)}
                    size={'sm'}
                    type={'number'}
                    defaultValue={width}
                    ref={this.widthInput}
                    min={1}
                  />
                </Col>
              </Form.Group>
              {this.getPaddingSettings()}
            </Col>
          </Row>
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
          <FontAwesomeIcon icon="th"/>
        </Button>
      </OverlayTrigger>
    )
  }
}

const mapProps = state => {
  return {...state.EditorReducer.present.gridSettings}
};

const mapAction = dispatch => {
  return {...bindActionCreators(GridSettingsActions, dispatch)}
};

const GridSettings = connect(mapProps, mapAction)(GridSettingsComp);

export default GridSettings;