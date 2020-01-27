import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('main-layout', {
      main: 'home',
      navbar: 'navbar',
      footer: 'footer',
    });
  },
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action() {
    if (!Meteor.user()) {
      return FlowRouter.go('home');
    }

    return BlazeLayout.render('main-layout', {
      main: 'dashboard',
      navbar: 'navbar',
      footer: 'footer',
    });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('main-layout', {
      main: 'not-found',
      navbar: 'navbar',
      footer: 'footer',
    });
  },
};
