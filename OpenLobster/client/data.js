Posts = new Mongo.Collection('posts');

if(Meteor.isClient)
{
  Template.body.helpers
  ({
    posts: function()
    {
      return Posts.find();
    }
  });
  Template.new_post.events
  ({
    'submit .new_post_form': function(event)
    {
      var header = event.target.header.value;
      var content = event.target.content.value;
      Posts.insert
      ({
        header: header,
        content: content,
        date: new Date()
      });



      return false;
    }
  });
}
