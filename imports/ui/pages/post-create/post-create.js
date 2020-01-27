import PostSchema from '/db/posts/schema'; // relative imports ftw
import './post-create.html';

Template.postCreate.helpers({
  postsSchema() {
    return PostSchema;
  },
});

AutoForm.addHooks('create-post', {
  onSuccess() {
    alert('Post added!');
  },
  onError(formType, error) {
    alert(error.reason);
  },
});
