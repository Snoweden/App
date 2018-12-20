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
  },

  addStarRating(feedback) {
    return fetch('/api/userinput/feedback', {
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
        console.log();
        return response.json();
      });
  }, 

  updateUser(user) {
    console.log(user);
    return fetch('/api/userinput/updateUsername', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      }, 
      body: JSON.stringify(user)
    })
      .then (response => {
        console.log('put call from api');
        return response.json();
      });
  }

};