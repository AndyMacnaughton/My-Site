App = Ember.Application.create({
	LOG_TRANSITIONS: false
});

App.Router.map(function() {
 	this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Andrew Macnaughton");
    this.controllerFor("navbar").set('isIndex', true);
  }
});

App.AboutRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor("navbar").set('isIndex', false);
  }
});

App.NavbarController = Ember.Controller.extend({
	isIndex: true
});

// JQuery Functions

$(window).load(function() {
	$('.banner-wrapper').append('<div class="banner-image"></div>').hide().fadeIn(400);
});