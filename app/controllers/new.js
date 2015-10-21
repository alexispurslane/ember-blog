import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
    title: '',
    body: '',
    description: '',
    actions: {
	post() {
	    this.store.createRecord('post', {
		title: this.get('title'),
		body: this.get('body'),
		description: (() => {
		    if (this.get("description") == '') {
			return this.get('body').substring(0, 150);
		    } else {
			return this.get("description");
		    }
		})(),
		timestamp: moment().format('MMMM Do YYYY')
	    }).save();
	    
	    this.set('title', '');
	    this.set('body', '');
	    this.set('description', '');
	    this.transitionToRoute('posts');
	},
	cancel() {
	    this.transitionToRoute('posts');
	}
    }
});
