export default Ember.Route.extend({
  model: function() {
    return ic.ajax('http://localhost:8080/channels/1.json')
  },

  afterModel: function() {
    var name = prompt("Welcome to Lagerfeuer! Your name:");
    this.controllerFor('user').set('model', {name: name});
  },

  setupController: function(controller, model) {
    controller.set('model', model.channel.messages);
  }
});
