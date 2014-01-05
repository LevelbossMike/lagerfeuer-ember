export default Ember.Route.extend({
  model: function() {
    return this.store.find('channel', 1);
  },

  afterModel: function() {
    var name = prompt("Welcome to Lagerfeuer! Your name:");
    this.controllerFor('user').set('model', {name: name});
  }
});
