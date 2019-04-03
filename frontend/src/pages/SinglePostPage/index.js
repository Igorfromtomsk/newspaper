import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPostById} from "../../actions/posts";

class SinglePostPageComponent extends Component {
  componentDidMount() {
    this.props.getPostById(this.props.match.params.id);
  }

  render() {
    const {post} = this.props;
    return (
      <>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.text}} />
      </>
    )
  }
}

const mapProps = state => {
  return {post: state.PostsReducer.selected}
};

const mapActions = dispatch => {
  return {
    getPostById: id => dispatch(getPostById(id))
  }
};

const SinglePostPage = connect(
  mapProps,
  mapActions
)(SinglePostPageComponent);

export default SinglePostPage;