var Channel = DS.Model.extend({
  title: DS.attr(),
  messages: DS.hasMany('message')
});

export default Channel;
