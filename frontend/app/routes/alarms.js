import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      alarms: this.get('store').findAll('alarm'),
      locations: this.get('store').findAll('location')
    });
  }
});
