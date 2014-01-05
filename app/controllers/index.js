export default Ember.ObjectController.extend({
  address: 'general',

  needs: ['event_bus', 'user'],

  user: Em.computed.alias('controllers.user'),

  eb: Em.computed.alias('controllers.event_bus'),

  connectChat: function() {
    var address = this.get('address');
    var handler = this.get('chatHandler');

    this.get('eb').queueHandler({address: 'chat.' + address, handler: handler.bind(this)});
  }.on('init'),

  chatHandler: function(message) {
    this.get('messages').pushObject(Em.$.parseJSON(message));
  },

  removeMessage: function(message) {
    var messages        = this.get('messages');
    var messageToRemove = messages.findBy('id', message.id);

    messages.removeObject(messageToRemove);
  },

  actions: {
    sendMessage: function() {
      var address   = this.get('address');
      var message   = this.get('message');
      var user_name = this.get('user.name');

      if (message.length > 0) {
        var msg = { body: message, address: address, user_name: user_name,  user_id: 1 };

        this.get('eb.model').send('chat.send_message', msg);
        this.set('message', '');
      }
    },

    deleteMessage: function(message) {
      var removeMessage = this.get('removeMessage').bind(this);
      message.destroyRecord().then(removeMessage);
    },

    editLastMessage: function() {
      console.log('editing messages is not supported yet');
    }
  }
});
