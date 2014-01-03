marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

export default Ember.Handlebars.makeBoundHelper(function(input) {
  if (input != null) {
    var markdown = marked(input);
    return new Ember.Handlebars.SafeString(markdown);
  }
});
