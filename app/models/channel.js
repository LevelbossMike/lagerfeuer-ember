var Channel = DS.Model.extend({
  title: DS.attr(),
  messages: DS.hasMany('message', { async: true })
});

export default Channel;
