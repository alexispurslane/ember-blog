export default function() {
    this.namespace = '/api';
    
    this.get('/posts');
    this.post('/posts');
    this.del('/posts');

    this.get('/posts/:id', function(db, request) {
	var id = request.params.id;

	return { post: db.posts.find(id) };
    });
    this.put('/posts/:id');
}
