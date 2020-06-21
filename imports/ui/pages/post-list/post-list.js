import './post-list.html';
import { Posts } from '/db';

Template.postList.onCreated(function () {
  this.subscribe('posts');
});

Template.postList.helpers({
  Posts() {
    return Posts.find({}).fetch();
  },
});
