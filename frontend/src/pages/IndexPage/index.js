import React, {Component} from 'react';
import {connect} from "react-redux";

class IndexPageComp extends Component {
  componentDidMount() {
    document.title = `${this.props.title} | Home`;
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