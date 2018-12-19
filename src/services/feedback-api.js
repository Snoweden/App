export default {
  getComments(id) {
    console.log('api get comment', id);
    return fetch(`/api/feedback/${id}`)
      .then(response => response.json())
      .then(feedback => feedback.map(feed => feed.comment));
  }
};