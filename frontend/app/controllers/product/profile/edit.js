import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  actions: {
    update() {
      sessionAccount.currentUser.save().then(() => {
        this.transitionToRoute('product.profile');
      });
    }
  }
});
