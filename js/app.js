App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


App.Router.map(function() {
 	this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Andrew Macnaughton");
  }
});