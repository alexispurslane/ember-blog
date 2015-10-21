import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
	post() {
	    var newPost = this.get('model');
	    newPost.set('timestamp', moment().format('MMMM Do YYYY, h:mm a'));
	    newPost.save();
	    this.transitionToRoute('posts');
	},
	cancel() {
	    this.transitionToRoute('posts');
	}
    }
});
