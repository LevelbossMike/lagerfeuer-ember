import MarkdownTextfield from 'appkit/components/markdown-textfield';

var dispatcher; 

module("Unit - MarkdownTextfield", {
  setup: function() {
    dispatcher = Ember.EventDispatcher.create({rootElement: "#qunit-fixture"});
    Ember.run(dispatcher, 'setup');
  },
  teardown: function() {
    Ember.run(dispatcher, 'destroy');
  }
});

test("it exist", function() {
  ok(MarkdownTextfield);
});

test("it increments `rows` on Alt + Enter", function() {
  var md = MarkdownTextfield.create();

  equal(md.get('rows'), 1, "rows is initially 1");
  Ember.run(md, md.appendTo, '#qunit-fixture');

  Ember.run(function() {
    var e = $.Event("keyup");
    e.keyCode = e.which = 13;
    e.altKey = true;
    md.$().trigger(e);
  });

  equal(md.get('rows'), 2, "rows has been incremented");

});
