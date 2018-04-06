import DS from 'ember-data';

const { JSONSerializer, RESTSerializer } = DS;

// export default JSONSerializer.extend({
//   normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
//     console.log('normalizing');
//     return this._super(store, primaryModelClass, payload.items, id, requestType);
//   },
//   extractMeta(store, modelClass, payload) {
//     console.log('extracting meta');
//     console.log('payload', payload);
//   }
// });

export default RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
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
