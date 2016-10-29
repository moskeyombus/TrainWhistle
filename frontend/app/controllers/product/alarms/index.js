import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add() {
      let alarm = this.get('store').createRecord('alarm', {});
      this.get('model.alarms').toArray().pushObject(alarm);
    }
  }
});
