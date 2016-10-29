import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  name: Ember.computed('first_name', 'last_name', function() {
    let firstName = this.get('first_name'), lastName = this.get('first_name'), name = [];

    // Check for existence of first name; if it exists, add it to name array
    if (firstName != null && firstName !== "") {
      name.push(firstName);
    }

    // Check for existence of last name; if it exists, add it to name array
    if (lastName != null && lastName !== "") {
      name.push(lastName);
    }

    // Join names with spaces
    return name.join(" ");
  })
});
