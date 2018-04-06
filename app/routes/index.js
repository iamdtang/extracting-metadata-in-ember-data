import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('post', {
      page: 1
    });
  },
  afterModel(posts) {
    console.log('Posts: ', posts.get('length'));
    console.log('Meta: ', posts.get('meta'));
  }
});
