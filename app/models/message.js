var attr = DS.attr;
var belongsTo = DS.belongsTo;

var Message = DS.Model.extend({
  body: attr(),
  userName: attr(),
  channel: belongsTo('channel')
});

export default Message;
