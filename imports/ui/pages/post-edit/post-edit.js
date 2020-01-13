import PostSchema from "/db/posts/schema";
import Posts from '/db/posts/collection.js';
import "./post-edit.html";

Template.postEdit.helpers({
    postsSchema() {
        return PostSchema;
    },
    post() {
        return Posts.findOne({});
    }
});

AutoForm.addHooks("edit-post", {
    onSuccess: function(formType, result) {
        alert("Post edited!");
    },
    onError: function(formType, error) {
        alert(error.reason);
    }
});
