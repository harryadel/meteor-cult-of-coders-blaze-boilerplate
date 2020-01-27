import SimplSchema from 'simpl-schema';

SimplSchema.extendOptions(['autoform']);

export default new SimplSchema({
  _id: {
    type: String,
    autoform: {
      type: 'hidden',
      label: false,
    },
  },
  title: String,
  description: String,
  userId: {
    type: String,
    optional: true,
  },
});
