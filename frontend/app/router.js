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
  this.route('product', {path:'/product'}, function() {
    this.route('dashboard');
    this.route('alarms', function() {
      this.route('edit');
      this.route('index', {path: '/'});
      this.route('new');
      this.route('show');
    });
    this.route('profile', function() {
      this.route('show', {path: '/'});
      this.route('edit');
    });
  });
});

export default Router;
