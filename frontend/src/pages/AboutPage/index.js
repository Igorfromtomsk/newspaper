import React, {Component} from 'react';
import {connect} from "react-redux";

class AboutPageComp extends Component {
  componentDidMount() {
    document.title = `${this.props.title} | Home`;
  }


  render() {
    return (
      <h1>about page</h1>
    )
  }
}

const mapProps = state => {
  return {
    pageTitle: state.GeneralReducer.title
  }
};

const mapAction = {};

const AboutPage = connect(
  mapProps,
  mapAction
)(AboutPageComp);

export default AboutPage;