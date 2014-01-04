var attr = DS.attr;

var Message = DS.Model.extend({
  body: attr(),
  userName: attr()
});

export default Message;
