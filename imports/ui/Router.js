import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route("/", {
    name: "home",
    action: function(params) {
        BlazeLayout.render("main-layout", {
            main: "home",
            navbar: "navbar",
            footer: "footer"
        });
    }
});

FlowRouter.route("/dashboard", {
    name: "dashboard",
    action: function(params) {
        if (!Meteor.user()) {
            return FlowRouter.go('home');
        }

        BlazeLayout.render("main-layout", {
            main: "dashboard",
            navbar: "navbar",
            footer: "footer"
        });
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("main-layout", {
            main: "not-found",
            navbar: "navbar",
            footer: "footer"
        });
    }
};
