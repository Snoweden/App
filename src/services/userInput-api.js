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
        return response.json();
      });
  },

  addStarRating(feedback) {
    console.log('api call', feedback);
    return fetch('/api/userinput/star', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(response => response.json());
  }, 
  getStats() {
    return fetch('/api/userinput/stats', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }, 

    })
      .then(response => {
        return response.json();
      });
  }

};