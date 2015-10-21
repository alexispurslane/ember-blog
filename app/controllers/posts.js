import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
    postsByDate: groupBy('model', 'timestamp'),
    postsByDateSorted: function () {
	return this.get('postsByDate').sort((a, b) => parseInt(moment(a.value, 'MMMM Do YYYY').format('D')) - parseInt(moment(b.value, 'MMMM Do YYYY').format('D')));
    }.property('postsByDate', 'model'),
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
