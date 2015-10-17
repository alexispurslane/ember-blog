import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],
    filteredContent: function () {
	let m = this.currentModel.filter((post) => post.title.includes(this.get('search')));
	return m;
    }.property('controllers.application.search'),
    actions: {
	view(post) {
	    console.log(this.get('controllers.application'));
	    this.transitionToRoute('post', this.store.findRecord('post', parseInt(post)));
	}
    }
});
