
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
        // See the signs:
        // (1) declaring array prior to loop:
        // let info = [];
        // feedback.forEach(feed => {
        //   let temp = {};
        //   temp.user = feed.username;
        //   temp.comment = feed.comment;
        //   temp.commentId = feed.commentId;
        //   temp.resortId = feed.resortId;
        //   feed.profile_id === user.id ? temp.userComment = true : temp.userComment = false;
        //   // (2) pushing one item into new array per item in original array
        //   info.push(temp);
        // });

        // That's a map!
        return feedback.map(feed => {
          return {
            user: feed.username,
            comment: feed.comment,
            commentId: feed.commentId,
            resortId: feed.resortId,
            userComment: feed.profile_id === user.id
          }
        });
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