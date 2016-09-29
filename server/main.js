import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home' });
  }
});

FlowRouter.route('/blog', {
  action: function() {
    BlazeLayout.render('layout', { main: 'blog' });
  }
});

FlowRouter.route('/calendario');
FlowRouter.route('/estadosgenerales');
FlowRouter.route('/calendario');
FlowRouter.route('/contact');
