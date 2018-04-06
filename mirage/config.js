export default function() {
  // works out of the box
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

  this.get('/posts', function() {
    return {
      total: 3,
      items: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' }
      ]
    }
  });
}
