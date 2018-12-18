export default {
  addComment(feedback) {
    console.log(feedback);
    return fetch('/api/userinput/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(response => {
        console.log('response from api on add comment', response);
        return response.json();
      });
  }
};