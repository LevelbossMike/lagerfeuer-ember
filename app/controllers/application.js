export default Ember.Controller.extend({
  needs: ['eventBus'],

  init: function() {
    this.get('controllers.eventBus').connectEventBus();
  }
});
