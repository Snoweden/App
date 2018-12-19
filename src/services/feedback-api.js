export default {
  getComments(id) {
    return fetch(`/api/feedback/${id}`)
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