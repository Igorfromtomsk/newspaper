import React, {Component} from 'react';
import {connect} from "react-redux";

class IndexPageComp extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_TITLE)
    document.title = `${process.env.REACT_APP_TITLE} | Home`;
  }


  render() {
    return (
      <h1>index page</h1>
    )
  }
}

const mapProps = state => {
  return {
    pageTitle: state.GeneralReducer.title
  }
};

const mapAction = {};

const IndexPage = connect(
  mapProps,
  mapAction
)(IndexPageComp);

export default IndexPage;