import feedbackApi from './feedback-api';
import userInputApi from './userInput-api';

let token = '';
let user = '';

export default {
  setToken(t) {
    token = t;
    feedbackApi.setToken(token);
    userInputApi.setToken(token);
  },

  setUser(profile) {
    user = profile;
    feedbackApi.setUser(profile);
  },

  getUser() {
    return user;
  },

  signIn(profile) {
    return fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  signUp(profile) {
    return fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  getResortById(id) {
    return fetch(`/api/map/resort/${id}`, {
      method: 'GET'
    })
      .then(response => response.json());
  },

  getMarkers() {
    return fetch('/api/map/markers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json());
  },

  getResorts() {
    return fetch('/api/map/resortall', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json());
  }
};