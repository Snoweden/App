let token = '';

export default {
  setToken(t) {
    token = t;
  },

  getToken() {
    return token;
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

  getResortByid(id) {
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