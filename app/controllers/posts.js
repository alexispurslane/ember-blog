import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
    postsByDate: groupBy('model', 'timestamp'),
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
