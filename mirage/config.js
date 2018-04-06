export default function() {
  this.get('/posts', function() {
    return {
      totalItems: 3,
      items: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' }
      ],
      // meta: {
      //   totalItems: 3
      // }
    }
  });

  // this.get('/posts', function() {
  //   return {
  //     post: [
  //       { id: 1, title: 'Post 1' },
  //       { id: 2, title: 'Post 2' },
  //       { id: 3, title: 'Post 3' }
  //     ],
  //     meta: {
  //       total: 3
  //     }
  //   }
  // });

  /*
    Shorthand cheatsheet:


    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
