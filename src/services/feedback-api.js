import serverApi from './server-api';

export default {
  getComments(id) {
    return fetch(`/api/feedback/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': serverApi.getToken()
      }
    })
      .then(response => response.json())
      .then(feedback => {
        let info = [];
        feedback.forEach(feed => {
          let temp = {};
          temp.user = feed.username;
          temp.comment = feed.comment;
          info.push(temp);
        });
        return info;
      });
  }
};