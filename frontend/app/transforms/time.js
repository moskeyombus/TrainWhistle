import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (serialized == null) {
      return undefined;
    }

    return new moment(serialized, 'H:m').format('H:mm:ss');
  },

  serialize(deserialized) {
    if (deserialized != null) {
      return moment(deserialized, 'H:m').format('H:mm:ss');
    }
  }
});
