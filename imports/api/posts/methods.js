import { Meteor } from "meteor/meteor";
import { Posts } from "/db";

Meteor.methods({
    "post.create"(post) {
        Posts.insert(post);
    },

    "post.list"() {
        return Posts.find().fetch();
    },

    "post.edit"({ _id, title, description }) {
        return Posts.update(_id, {
            $set: {
                title,
                description
            }
        });
    },

    "post.remove"(_id) {
        Posts.remove(_id);
    },

    "post.get"(_id) {
        return Posts.findOne(_id);
    }
});
