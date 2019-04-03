import * as Actions from '../actionTypes/posts';

export function getPostById(postId) {
  return {
    type: Actions.GET_POST_BY_ID,
    id: postId
  }
}