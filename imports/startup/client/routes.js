import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
//import '../../ui/layouts/app-body.js';
//import '../../ui/pages/root-redirector.js';
//import '../../ui/pages/lists-show-page.js';
//import '../../ui/pages/app-not-found.js';

// Import to override accounts templates
//import '../../ui/accounts/accounts-templates.js';


FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'app_rootRedirector' });
  },
});

FlowRouter.route('/blog', {
  name: 'App.blog',
  action() {
    BlazeLayout.render('App_blog', { main: 'app_blog' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
