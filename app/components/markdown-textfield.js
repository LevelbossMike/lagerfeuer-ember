// Ember.TextArea extends Ember.Component so we don't have to specify
// a template if we just want to use a normal textarea in our view.

export default Ember.TextArea.extend({
  classNames: ['md-textfield'],

  placeholder: 'Say something',

  rows: 1,

  // When pressing alt + enter the TextArea will grow. Otherwise when hitting
  // enter the TextArea will behave in the default way.
  insertNewline: function(event) {
    if (event.altKey) {
      this.incrementProperty('rows');
    } else {
      this._super(event);
      this.set('rows', 1);
    }
  }
});
