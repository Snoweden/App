import serverApi from './server-api';

export default {
  getComments(id) {
    console.log('getcommentns', serverApi.getToken());
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
          temp.user = JSON.parse(feed.profile_id).username;
          temp.comment = feed.comment;
          info.push(temp);
        });
        return info;
      });
  }
};