import { Posts } from '/db';
import { Meteor } from 'meteor/meteor';

Meteor.publish('posts', function(_id) {
  if (!_id) {
    return Posts.find();
  }
  return Posts.find({ _id });
});
