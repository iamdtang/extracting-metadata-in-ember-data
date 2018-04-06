import DS from 'ember-data';

const { JSONSerializer, RESTSerializer } = DS;

// testing for a single post on the /post route
// export default JSONSerializer.extend({
//   extractMeta(store, modelClass, payload) {
//     console.log('extracting meta');
//     console.log(payload.meta);
//     return payload.meta;
//   }
// });

// export default JSONSerializer.extend({
//   normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
//     console.log('normalizing');
//     return this._super(store, primaryModelClass, payload.items, id, requestType);
//   },
//   extractMeta(store, modelClass, payload) {
//     console.log('extracting meta');
//     console.log('payload', payload.meta);
//   }
// });

export default RESTSerializer.extend({
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    payload[primaryModelClass.modelName] = payload.items;
    delete payload.items;
    return this._super(...arguments);
  },
  extractMeta(store, modelClass, payload) {
    let { total } = payload;
    payload.meta = { total };
    delete payload.total;
    return this._super(...arguments);
  }
});
