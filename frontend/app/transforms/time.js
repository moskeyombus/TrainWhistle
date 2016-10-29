import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (serialized == null) {
      return undefined;
    }

    serialized = `${serialized.hour}:${serialized.min}:${serialized.sec}`;
    return new moment(serialized, 'H:m').format('H:mm:ss');
  },

  serialize(deserialized) {
    if (deserialized != null) {
      let m = moment(deserialized, 'H:m');
      return {hour: m.hour(), min: m.minute(), sec: m.second()};
    }
  }
});
