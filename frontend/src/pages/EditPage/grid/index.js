import React, {Component} from 'react';
import S from './styles.module.css';
import {connect} from "react-redux";


class GridComp extends Component {
  renderGrid() {
    const {columnsAmount, columnsOffset} = this.props;

    return (
      <div className={S.grid}>
        {Array.from(Array(columnsAmount), (x, i) => i + 1).map(col => (
          <div
            key={col}
            className={S.column}
            style={{
              margin: `0 ${columnsOffset/2}px`
            }}
          />
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