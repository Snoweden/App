export default {
  addComment(comment) {
    return fetch('/api/user-input/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(response => {
        console.log('response from api on add comment', comment);
        response.json();
      }) ;
  }
};