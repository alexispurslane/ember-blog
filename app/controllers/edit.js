import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
	post() {
	    var newPost = this.get('model');
	    newPost.save();
	    this.transitionToRoute('posts');
	}
    }
});
