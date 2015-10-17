export default function() {
    this.namespace = '/api';
    
    this.get('/posts');
    this.put('/posts');
    this.del('/posts');

    this.get('/posts/:id', function(db, request) {
	var id = request.params.id;

	return db.posts.find(id);
    });
}
