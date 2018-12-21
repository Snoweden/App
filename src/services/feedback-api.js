
let token = '';
let user = '';

export default {
  setToken(t) {
    token = t;
  },
  setUser(profile) {
    user = profile;
  },
  getComments(id) {
    return fetch(`/api/feedback/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => response.json())
      .then(feedback => {
        let info = [];
        feedback.forEach(feed => {
          let temp = {};
          temp.user = feed.username;
          temp.comment = feed.comment;
          temp.commentId = feed.commentId;
          temp.resortId = feed.resortId;
          feed.profile_id === user.id ? temp.userComment = true : temp.userComment = false;
          info.push(temp);
        });
        return info;
      });
  },

  deleteComment(id) {
    fetch(`/api/feedback/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }
};