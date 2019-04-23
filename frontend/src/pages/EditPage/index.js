import React, {Component} from 'react';
import {connect} from "react-redux";
import S from './styles.module.css';
import classNames from 'classnames';


import {showFooter, hideFooter} from "../../actions/generalActions";


import UserBar from './userBar';
import StateBar from './stateBar';
import WorkSpace from './workSpace';
import Grid from './grid';


class EditPageComp extends Component {
  componentDidMount() {
    document.title = `${this.props.general.title} | Editor`;
    this.props.hideFooter();
  }


  componentWillUnmount() {
    this.props.showFooter();
  }


  render() {
    return (
      <div className={classNames(S.editor, S.fGrow, S.dFlex, S.dColumn)}>
        <StateBar />
        <div className={classNames(S.fGrow, S.dFlex)}>
          <UserBar />
          <WorkSpace />
        </div>
        <Grid/>
      </div>
    )
  }
}


const mapProps = state => {
  return {
    general: state.GeneralReducer
  }
};


const mapActions = dispatch => {
  return {
    showFooter: () => {dispatch(showFooter())},
    hideFooter: () => {dispatch(hideFooter())}
  }
};


const EditPage = connect(mapProps, mapActions)(EditPageComp);


export default EditPage;