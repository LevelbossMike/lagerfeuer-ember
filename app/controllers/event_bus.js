export default Ember.ObjectController.extend(Ember.Evented, {
  connectEventBus: function() {
    var eb      = new vertx.EventBus("http://localhost:3000/eventbus");
    eb.onopen   = this.announceEventbusReady.bind(this);

    this.set('model', eb);
  },

  eventbus: Em.computed.alias('model'),

  handlerQueue: [],

  queueHandler: function(handlerObject) {
    if (this.get('eventbusReady')) {
      this.registerHandler(handlerObject);
    } else {
      this.get('handlerQueue').pushObject(handlerObject);
    }
  },

  registerHandler: function(handlerObject) {
    var address  = handlerObject.address;
    var handler  = handlerObject.handler;
    var eventbus = this.get('eventbus');

    eventbus.registerHandler(address, handler);
  },

  registerQueuedHandlers: function() {
    var registerHandler = this.registerHandler.bind(this);
    this.get('handlerQueue').forEach(registerHandler);
  }.on('eventbusReady'),

  setEventbusReady: function() {
    this.set('eventbusReady', true);
  }.on('eventbusReady'),

  announceEventbusReady: function() {
    this.trigger('eventbusReady');
  }
});
