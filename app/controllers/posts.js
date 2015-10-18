import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],
    filteredContent: function () {
	let m = this.currentModel.filter((post) => post.title.includes(this.get('search')));
	return m;
    }.property('controllers.application.search'),
    actions: {
	delete(post) {
	    post.deleteRecord();
	    post.save();
	},
	view(post) {
	    this.transitionToRoute('post', post);
	},
	edit(post) {
	    this.transitionToRoute('edit', post);
	}
    }
});
