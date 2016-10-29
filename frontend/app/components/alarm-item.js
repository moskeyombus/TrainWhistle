import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      this.set('mode', 'edit');
    },
    save() {
      this.get('alarm').save().then(() => {
        this.set('mode', 'show')
      });
    },
    show() {
      this.set('mode', 'show');
    },
    setLocation(selected){
      var value; 
      if (selected != null) {
        value = selected.id;
      }
      this.alarm.set('start_location_id', value);
    }
  },
  classNames: ['alarm'],
  inEditMode: Ember.computed('mode', function() {
    return 'edit' === this.get('mode');
  }),
  directions: ['n', 's', 'e', 'w'],
  lines: ['blue', 'gold', 'green', 'red'],
  mode: 'show'
});
