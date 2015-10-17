import Ember from 'ember';

export default Ember.Controller.extend({
    searchOn: false,
    search: '',
    currentPathCaps: function () {
	this.set('searchOn', false);
	let string = this.get('currentPath');
	return string.charAt(0).toUpperCase() + string.slice(1);
    }.property('currentPath'),
    actions: {
	search() {
	    this.set('searchOn', !this.get('searchOn'));
	    Ember.$('#searchbar').focus();
	},
	updateSearch(s) {
	    this.set('search', s);
	},
	goto(route) {
	    this.transitionToRoute(route);
	}
    }
});
