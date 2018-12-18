export default {
  addComment(feedback) {
    return fetch('/api/userinput/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(response => {
        return response.json();
      });
  }
};