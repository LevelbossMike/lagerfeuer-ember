export default Ember.ObjectController.extend({
  cancelEdit: function() {
    this.set('editing', false);
  },

  actions: {
    edit: function() {
      this.set('editing', true);
    },

    cancelEdit: function() {
      this.get('model').rollback();
      this.cancelEdit();
    },

    persistEdit: function() {
      var message    = this.get('model');

      message.save().then(this.cancelEdit.bind(this));
    },

    delete: function() {
      if (confirm('Delete this message?')) {
        this.send('deleteMessage', this.get('model'));
      }
    }
  }
});
