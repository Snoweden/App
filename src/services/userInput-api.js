import serverApi from './server-api.js';


export default {
  addComment(feedback) {
    return fetch('/api/userinput/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': serverApi.getToken()
      },
      body: JSON.stringify(feedback)
    })
      .then(response => {
        return response.json();
      });
  },

  addStarRating(feedback) {
    return fetch('/api/userinput/star', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': serverApi.getToken()
      },
      body: JSON.stringify(feedback)
    })
      .then(response => response.json());
  }, 
  getStats() {
    return fetch('/api/userinput/stats', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': serverApi.getToken()
      }, 

    })
      .then(response => {
        return response.json();
      });
  }, 

  updateUser(newUser) {
    return fetch('/api/userinput/update-user', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': serverApi.getToken()
      }, 
      body: JSON.stringify(newUser)
    })
      .then (response => {
        return response.json();
      });
  }

};