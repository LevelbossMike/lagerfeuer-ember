export default Ember.ObjectController.extend({
  actions: {
    edit: function() {
      console.log('you want to edit a message');
    },
    delete: function() {
      if (confirm('Delete this message?')) {
        this.send('deleteMessage', this.get('model'));
      }
    }
  }
});
