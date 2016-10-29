import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: '/api/login',
});
