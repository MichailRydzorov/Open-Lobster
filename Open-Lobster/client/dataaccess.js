Posts = new Mongo.Collection('posts');

if(Meteor.isClient)
{
  Template.body.helpers
  ({
    posts: function()
    {
      return Post.find();
    }
  });
}
