export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    messages: { embedded: 'always' }
  }
});
