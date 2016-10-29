import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing', {path: '/'}, function() {
    this.route('log-in', {path: '/'});
    this.route('sign-up', {path: 'sign-up'});
  });
});

export default Router;
