import React, {Component} from 'react';
import S from './styles.module.css';
import {connect} from "react-redux";
import classNames from 'classnames';
import Guide from './guide';


class GridComp extends Component {
  renderGrid() {
    const {
      columnsAmount,
      columnsOffset,
      leftPadding, rightPadding
    } = this.props;

    return (
      <div
        className={classNames(S.grid, 'js-guide-wrapper')}
        style={{
          paddingLeft: `${leftPadding}px`,
          paddingRight: `${rightPadding}px`
        }}
      >
        {Array.from(Array(columnsAmount), (x, i) => i + 1).map(col => (
          <div className={classNames(S.fGrow, S.dFlex)} key={`d-${col}`}>
            <div
              key={col}
              className={classNames(S.column, S.dFlex)}
              style={{
                marginLeft: col !== 1 ? `${columnsOffset/2}px` : null,
                marginRight: col !== columnsAmount ? `${columnsOffset/2}px` : null
              }}
            >
              <Guide key={`lg-${col}`} />
              <div key={`s-${col}`} className={S.fGrow} />
              <Guide key={`rg-${col}`} />
            </div>
            {col !== columnsAmount ? (
              <Guide key={`acg-${col}`} className={S.guideBetweenColumns} />
            ) : null}
          </div>
        ))}
      </div>
    )
  }


  render() {
    const {gridIsHidden} = this.props;

    if (gridIsHidden) {
      return null;
    } else {
      return this.renderGrid();
    }
  }
}

const mapProps = state => {
  return {
    ...state.EditorReducer.gridSettings
  }
};

const Grid = connect(mapProps)(GridComp);

export default Grid;