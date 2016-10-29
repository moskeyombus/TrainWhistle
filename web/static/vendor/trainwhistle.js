"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('trainwhistle/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _emberSimpleAuthMixinsDataAdapterMixin) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
    host: '/api',
    authorizer: 'authorizer:oauth2'
  });
});
define('trainwhistle/app', ['exports', 'ember', 'trainwhistle/resolver', 'ember-load-initializers', 'trainwhistle/config/environment'], function (exports, _ember, _trainwhistleResolver, _emberLoadInitializers, _trainwhistleConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _trainwhistleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _trainwhistleConfigEnvironment['default'].podModulePrefix,
    Resolver: _trainwhistleResolver['default']
  });

  _ember['default'].TextSupport.reopen({
    attributeBindings: ["autocapitalize"]
  });

  (0, _emberLoadInitializers['default'])(App, _trainwhistleConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('trainwhistle/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant', 'ember'], function (exports, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant, _ember) {
  exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend({
    serverTokenEndpoint: '/api/login'
  });
});
define('trainwhistle/authorizers/oauth2', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _emberSimpleAuthAuthorizersOauth2Bearer) {
  exports['default'] = _emberSimpleAuthAuthorizersOauth2Bearer['default'].extend();
});
define('trainwhistle/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'trainwhistle/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _trainwhistleConfigEnvironment) {

  var name = _trainwhistleConfigEnvironment['default'].APP.name;
  var version = _trainwhistleConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('trainwhistle/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('trainwhistle/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _emberBasicDropdownComponentsBasicDropdownContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContent['default'];
    }
  });
});
define('trainwhistle/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _emberBasicDropdownComponentsBasicDropdownTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownTrigger['default'];
    }
  });
});
define('trainwhistle/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('trainwhistle/components/head-content', ['exports', 'ember', 'trainwhistle/templates/head'], function (exports, _ember, _trainwhistleTemplatesHead) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    model: _ember['default'].inject.service('head-data'),
    layout: _trainwhistleTemplatesHead['default']
  });
});
define('trainwhistle/components/head-layout', ['exports', 'ember', 'ember-cli-head/templates/components/head-layout'], function (exports, _ember, _emberCliHeadTemplatesComponentsHeadLayout) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberCliHeadTemplatesComponentsHeadLayout['default']
  });
});
define('trainwhistle/components/intl-tel-input', ['exports', 'ember-intl-tel-input/components/intl-tel-input'], function (exports, _emberIntlTelInputComponentsIntlTelInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlTelInputComponentsIntlTelInput['default'];
    }
  });
});
define('trainwhistle/components/missing-field', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['missing']
  });
});
define('trainwhistle/components/notification-container', ['exports', 'ember-cli-notifications/components/notification-container'], function (exports, _emberCliNotificationsComponentsNotificationContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliNotificationsComponentsNotificationContainer['default'];
    }
  });
});
define('trainwhistle/components/notification-message', ['exports', 'ember-cli-notifications/components/notification-message', 'trainwhistle/config/environment'], function (exports, _emberCliNotificationsComponentsNotificationMessage, _trainwhistleConfigEnvironment) {

  var config = _trainwhistleConfigEnvironment['default']['ember-cli-notifications'] || {};

  exports['default'] = _emberCliNotificationsComponentsNotificationMessage['default'].extend({
    icons: config.icons || 'font-awesome'
  });
});
define('trainwhistle/components/pikaday-input', ['exports', 'ember', 'ember-pikaday/components/pikaday-input'], function (exports, _ember, _emberPikadayComponentsPikadayInput) {
  exports['default'] = _emberPikadayComponentsPikadayInput['default'];
});
define('trainwhistle/components/pikaday-inputless', ['exports', 'ember-pikaday/components/pikaday-inputless'], function (exports, _emberPikadayComponentsPikadayInputless) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPikadayComponentsPikadayInputless['default'];
    }
  });
});
define('trainwhistle/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('trainwhistle/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('trainwhistle/components/power-select-with-fallback', ['exports', 'ember-power-select-with-fallback/components/power-select-with-fallback'], function (exports, _emberPowerSelectWithFallbackComponentsPowerSelectWithFallback) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectWithFallbackComponentsPowerSelectWithFallback['default'];
    }
  });
});
define('trainwhistle/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('trainwhistle/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('trainwhistle/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('trainwhistle/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _emberPowerSelectComponentsPowerSelectSearchMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSearchMessage['default'];
    }
  });
});
define('trainwhistle/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('trainwhistle/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service(),
    sessionAccount: _ember['default'].inject.service(),

    actions: {
      logout: function logout() {
        this.get('session').invalidate();
      }
    }
  });
});
define('trainwhistle/controllers/landing/log-in', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service(),
    sessionAccount: _ember['default'].inject.service(),
    ajax: _ember['default'].inject.service(),

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        this.set('errorMessage', undefined);

        var _getProperties = this.getProperties('email', 'password');

        var email = _getProperties.email;
        var password = _getProperties.password;

        this.get('session').authenticate('authenticator:oauth2', email, password).then(function () {
          _this.get('sessionAccount').loadCurrentUser();
        })['catch'](function (reason) {
          _this.set('errorMessage', 'Invalid username or password');
        });
      }
    }
  });
});
define('trainwhistle/controllers/landing/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service(),
    sessionAccount: _ember['default'].inject.service(),
    ajax: _ember['default'].inject.service(),

    actions: {
      register: function register() {
        var _this = this;

        this.set('errorMessage', undefined);

        if (this.get('password') !== this.get('passwordConfirmation')) {
          this.set('errorMessage', 'Password and confirmation do not match.');
          return;
        }

        var userData = {
          first_name: this.get('firstName'),
          last_name: this.get('lastName'),
          email: this.get('email'),
          password: this.get('password'),
          phone: this.get('phone')
        };

        this.get('ajax').post('/users', { data: userData }).then(function () {
          var _getProperties = _this.getProperties('email', 'password');

          var email = _getProperties.email;
          var password = _getProperties.password;

          _this.get('session').authenticate('authenticator:oauth2', email, password).then(function () {
            _this.get('sessionAccount').loadCurrentUser();
          });
        })['catch'](function () {
          _this.set('errorMessage', 'An error occurred, please try again');
        });
      }
    }
  });
});
define('trainwhistle/controllers/product/profile/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service(),
    sessionAccount: _ember['default'].inject.service(),

    actions: {
      update: function update() {
        var _this = this;

        sessionAccount.currentUser.save().then(function () {
          _this.transitionToRoute('product.profile');
        });
      }
    }
  });
});
define('trainwhistle/controllers/product/profile/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service(),
    sessionAccount: _ember['default'].inject.service()
  });
});
define('trainwhistle/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('trainwhistle/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _emberComposableHelpersHelpersArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray['default'];
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray.array;
    }
  });
});
define('trainwhistle/helpers/camelize', ['exports', 'ember-composable-helpers/helpers/camelize'], function (exports, _emberComposableHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize.camelize;
    }
  });
});
define('trainwhistle/helpers/capitalize', ['exports', 'ember-composable-helpers/helpers/capitalize'], function (exports, _emberComposableHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('trainwhistle/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('trainwhistle/helpers/classify', ['exports', 'ember-composable-helpers/helpers/classify'], function (exports, _emberComposableHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify.classify;
    }
  });
});
define('trainwhistle/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('trainwhistle/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('trainwhistle/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _emberComposableHelpersHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains.contains;
    }
  });
});
define('trainwhistle/helpers/dasherize', ['exports', 'ember-composable-helpers/helpers/dasherize'], function (exports, _emberComposableHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize.dasherize;
    }
  });
});
define('trainwhistle/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('trainwhistle/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('trainwhistle/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('trainwhistle/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('trainwhistle/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('trainwhistle/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _emberComposableHelpersHelpersFilter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter['default'];
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter.filter;
    }
  });
});
define('trainwhistle/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('trainwhistle/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('trainwhistle/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('trainwhistle/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _emberComposableHelpersHelpersHasNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext['default'];
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext.hasNext;
    }
  });
});
define('trainwhistle/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _emberComposableHelpersHelpersHasPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious.hasPrevious;
    }
  });
});
define('trainwhistle/helpers/html-safe', ['exports', 'ember-composable-helpers/helpers/html-safe'], function (exports, _emberComposableHelpersHelpersHtmlSafe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe['default'];
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe.htmlSafe;
    }
  });
});
define('trainwhistle/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('trainwhistle/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('trainwhistle/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('trainwhistle/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('trainwhistle/helpers/lookup-module-styles', ['exports', 'ember-css-modules/helpers/lookup-module-styles'], function (exports, _emberCssModulesHelpersLookupModuleStyles) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesHelpersLookupModuleStyles['default'];
    }
  });
  Object.defineProperty(exports, 'lookupModuleStyles', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesHelpersLookupModuleStyles.lookupModuleStyles;
    }
  });
});
define('trainwhistle/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('trainwhistle/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _emberComposableHelpersHelpersMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap['default'];
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap.map;
    }
  });
});
define('trainwhistle/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _emberComposableHelpersHelpersNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext['default'];
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext.next;
    }
  });
});
define('trainwhistle/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('trainwhistle/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('trainwhistle/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/helpers/page-title', ['exports', 'ember-page-title/helpers/page-title'], function (exports, _emberPageTitleHelpersPageTitle) {
  exports['default'] = _emberPageTitleHelpersPageTitle['default'];
});
define('trainwhistle/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('trainwhistle/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('trainwhistle/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('trainwhistle/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _emberComposableHelpersHelpersPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious.previous;
    }
  });
});
define('trainwhistle/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _emberComposableHelpersHelpersQueue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue['default'];
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue.queue;
    }
  });
});
define('trainwhistle/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('trainwhistle/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _emberComposableHelpersHelpersReduce) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce['default'];
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce.reduce;
    }
  });
});
define('trainwhistle/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('trainwhistle/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('trainwhistle/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('trainwhistle/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('trainwhistle/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('trainwhistle/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _emberComposableHelpersHelpersSlice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice['default'];
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice.slice;
    }
  });
});
define('trainwhistle/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('trainwhistle/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('trainwhistle/helpers/titleize', ['exports', 'ember-composable-helpers/helpers/titleize'], function (exports, _emberComposableHelpersHelpersTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize.titleize;
    }
  });
});
define('trainwhistle/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('trainwhistle/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('trainwhistle/helpers/truncate', ['exports', 'ember-composable-helpers/helpers/truncate'], function (exports, _emberComposableHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate.truncate;
    }
  });
});
define('trainwhistle/helpers/underscore', ['exports', 'ember-composable-helpers/helpers/underscore'], function (exports, _emberComposableHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore.underscore;
    }
  });
});
define('trainwhistle/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('trainwhistle/helpers/w', ['exports', 'ember-composable-helpers/helpers/w'], function (exports, _emberComposableHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW.w;
    }
  });
});
define('trainwhistle/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('trainwhistle/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('trainwhistle/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'trainwhistle/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _trainwhistleConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_trainwhistleConfigEnvironment['default'].APP.name, _trainwhistleConfigEnvironment['default'].APP.version)
  };
});
define('trainwhistle/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('trainwhistle/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('trainwhistle/initializers/ember-cli-rails-addon-csrf', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = {
    name: 'ember-cli-rails-addon-csrf',

    initialize: function initialize() {
      $.ajaxPrefilter(function (options, originalOptions, xhr) {
        var token = $('meta[name="csrf-token"]').attr('content');
        xhr.setRequestHeader('X-CSRF-Token', token);
      });
    }
  };
});
define('trainwhistle/initializers/ember-css-modules', ['exports', 'ember-css-modules/initializers/ember-css-modules'], function (exports, _emberCssModulesInitializersEmberCssModules) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesInitializersEmberCssModules['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCssModulesInitializersEmberCssModules.initialize;
    }
  });
});
define('trainwhistle/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('trainwhistle/initializers/ember-simple-auth', ['exports', 'ember', 'trainwhistle/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _trainwhistleConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _trainwhistleConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _trainwhistleConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('trainwhistle/initializers/export-application-global', ['exports', 'ember', 'trainwhistle/config/environment'], function (exports, _ember, _trainwhistleConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_trainwhistleConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _trainwhistleConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_trainwhistleConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('trainwhistle/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('trainwhistle/initializers/notifications', ['exports', 'ember', 'ember-cli-notifications/services/notification-messages-service'], function (exports, _ember, _emberCliNotificationsServicesNotificationMessagesService) {
    exports['default'] = {
        name: 'notification-messages-service',

        initialize: function initialize() {
            var application = arguments[1] || arguments[0];
            if (_ember['default'].Service) {
                application.register('service:notification-messages', _emberCliNotificationsServicesNotificationMessagesService['default']);
                application.inject('component:notification-container', 'notifications', 'service:notification-messages');
                application.inject('component:notification-message', 'notifications', 'service:notification-messages');
                return;
            }
            application.register('notification-messages:service', _emberCliNotificationsServicesNotificationMessagesService['default']);

            ['controller', 'component', 'route', 'router', 'service'].forEach(function (injectionTarget) {
                application.inject(injectionTarget, 'notifications', 'notification-messages:service');
            });
        }
    };
});
define('trainwhistle/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('trainwhistle/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('trainwhistle/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('trainwhistle/instance-initializers/browser/head', ['exports', 'ember', 'trainwhistle/config/environment'], function (exports, _ember, _trainwhistleConfigEnvironment) {
  exports.initialize = initialize;

  function initialize(instance) {
    if (_trainwhistleConfigEnvironment['default']['ember-cli-head'] && _trainwhistleConfigEnvironment['default']['ember-cli-head']['suppressBrowserRender']) {
      return true;
    }

    // clear fast booted head (if any)
    _ember['default'].$('meta[name="ember-cli-head-start"]').nextUntil('meta[name="ember-cli-head-end"] ~').addBack().remove();
    var container = instance.lookup ? instance : instance.container;
    // const renderer = container.lookup('renderer:-dom');
    var component = container.lookup('component:head-layout');
    component.appendTo(document.head);
  }

  exports['default'] = {
    name: 'head-browser',
    initialize: initialize
  };
});
define("trainwhistle/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('trainwhistle/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('trainwhistle/models/alarm', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    start_time: _emberData['default'].attr('date'),
    end_time: _emberData['default'].attr('date'),
    last_notified: _emberData['default'].attr('date'),
    name: _emberData['default'].attr('string'),
    direction: _emberData['default'].attr('string'),
    line: _emberData['default'].attr('string')
  });
});
define('trainwhistle/models/user', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    first_name: _emberData['default'].attr('string'),
    last_name: _emberData['default'].attr('string'),
    phone: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    name: _ember['default'].computed('first_name', 'last_name', function () {
      var firstName = this.get('first_name'),
          lastName = this.get('last_name'),
          name = [];

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
});
define('trainwhistle/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('trainwhistle/router', ['exports', 'ember', 'trainwhistle/config/environment'], function (exports, _ember, _trainwhistleConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _trainwhistleConfigEnvironment['default'].locationType,
    rootURL: _trainwhistleConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('landing', { path: '/' }, function () {
      this.route('log-in', { path: '/' });
      this.route('sign-up', { path: 'sign-up' });
    });
    this.route('product', { path: '/product' }, function () {
      this.route('dashboard');
      this.route('alarms', function () {
        this.route('edit');
        this.route('index', { path: '/' });
        this.route('new');
        this.route('show');
      });
      this.route('profile', function () {
        this.route('show', { path: '/' });
        this.route('edit');
      });
    });
  });

  exports['default'] = Router;
});
define('trainwhistle/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
    sessionAccount: _ember['default'].inject.service(),
    beforeModel: function beforeModel() {
      this.get('sessionAccount').loadCurrentUser();
    }
  });
});
define('trainwhistle/routes/landing', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/landing/log-in', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/landing/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {});
});
define('trainwhistle/routes/product/alarms/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product/alarms/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product/alarms/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product/alarms/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product/dashboard', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product/profile/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trainwhistle/routes/product/profile/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    sessionAccount: _ember['default'].inject.service()
  });
});
define('trainwhistle/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('trainwhistle/services/fb', ['exports', 'ember-cli-facebook-js-sdk/services/fb'], function (exports, _emberCliFacebookJsSdkServicesFb) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFacebookJsSdkServicesFb['default'];
    }
  });
});
define('trainwhistle/services/head-data', ['exports', 'ember-cli-head/services/head-data'], function (exports, _emberCliHeadServicesHeadData) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliHeadServicesHeadData['default'];
    }
  });
});
define('trainwhistle/services/page-title-list', ['exports', 'ember-page-title/services/page-title-list', 'trainwhistle/config/environment'], function (exports, _emberPageTitleServicesPageTitleList, _trainwhistleConfigEnvironment) {

  function capitalize(key) {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }

  var defaults = {};
  ['separator', 'prepend', 'replace'].forEach(function (key) {
    if (_trainwhistleConfigEnvironment['default'].pageTitle && _trainwhistleConfigEnvironment['default'].pageTitle[key]) {
      defaults['default' + capitalize(key)] = _trainwhistleConfigEnvironment['default'].pageTitle[key];
    }
  });

  exports['default'] = _emberPageTitleServicesPageTitleList['default'].extend(defaults);
});
define('trainwhistle/services/session-account', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    session: _ember['default'].inject.service(),
    store: _ember['default'].inject.service(),
    loadCurrentUser: function loadCurrentUser() {
      var _this = this;

      if (this.get('session.isAuthenticated')) {
        this.get('store').queryRecord('user', { me: true }).then(function (user) {
          _this.set('currentUser', user);
        });
      }
    }
  });
});
define('trainwhistle/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('trainwhistle/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _emberTextMeasurerServicesTextMeasurer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTextMeasurerServicesTextMeasurer['default'];
    }
  });
});
define('trainwhistle/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("trainwhistle/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "moduleName": "trainwhistle/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/components/missing-field", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 60
            }
          },
          "moduleName": "trainwhistle/templates/components/missing-field.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "fa fa-plus");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Add ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "field", ["loc", [null, [1, 51], [1, 60]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 72
          }
        },
        "moduleName": "trainwhistle/templates/components/missing-field.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", [["get", "location", ["loc", [null, [1, 11], [1, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [1, 72]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("trainwhistle/templates/head", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "trainwhistle/templates/head.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" `app/templates/head.hbs` ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" content from ember-page-title, injected by ember-cli-head ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" The 'model' available in this template can be populated by ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" setting values on the 'head-data' service. ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("title");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [8]), 0, 0);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [5, 7], [5, 22]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/landing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 218
          }
        },
        "moduleName": "trainwhistle/templates/landing.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content-dialog");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-box");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "video-underlay");
        var el2 = dom.createElement("video");
        dom.setAttribute(el2, "src", "/videos/city.mp4");
        dom.setAttribute(el2, "autoplay", "");
        dom.setAttribute(el2, "autostart", "");
        dom.setAttribute(el2, "poster", "/images/city-poster.jpg");
        dom.setAttribute(el2, "preload", "auto");
        dom.setAttribute(el2, "loop", "");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0]), 0, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 52], [1, 62]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/landing/log-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 310
            },
            "end": {
              "line": 1,
              "column": 417
            }
          },
          "moduleName": "trainwhistle/templates/landing/log-in.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "text-center text-danger");
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Oops! ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.setAttribute(el1, "class", "spacer");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["content", "errorMessage", ["loc", [null, [1, 378], [1, 394]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 825
            },
            "end": {
              "line": 1,
              "column": 892
            }
          },
          "moduleName": "trainwhistle/templates/landing/log-in.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Sign Up");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 987
          }
        },
        "moduleName": "trainwhistle/templates/landing/log-in.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "image-box");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "/images/logo-color.svg");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "text-center");
        var el2 = dom.createElement("small");
        dom.setAttribute(el2, "class", "subtitle");
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Log in");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" or ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("sign up ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("to start to set up your Atlanta transit alerts and stop being late to work.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.setAttribute(el1, "class", "spacer");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-field");
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Email Address");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-field");
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Password");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "buttons-row");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "btn btn-success btn-main");
        var el4 = dom.createTextNode("Log In");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0]);
        var element1 = dom.childAt(fragment, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'width');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element1, 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [2]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "width", 400, 0, 0, 0, 0], ["element", "action", ["authenticate"], ["on", "submit"], ["loc", [null, [1, 272], [1, 309]]], 0, 0], ["block", "if", [["get", "errorMessage", ["loc", [null, [1, 316], [1, 328]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 310], [1, 424]]]], ["inline", "input", [], ["placeholder", "john.doe@example.com", "name", "email", "type", "email", "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [1, 551], [1, 556]]], 0, 0, 0, 0]], [], [], 0, 0], "required", true, "autocapitalize", "off", "autocorrect", "off", "autocomplete", "email", "required", true, "inputmode", "email"], ["loc", [null, [1, 476], [1, 664]]], 0, 0], ["inline", "input", [], ["placeholder", "password", "type", "password", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [1, 770], [1, 778]]], 0, 0, 0, 0]], [], [], 0, 0], "required", true], ["loc", [null, [1, 717], [1, 794]]], 0, 0], ["block", "link-to", ["landing.sign-up"], ["class", "btn btn-ghost-default"], 1, null, ["loc", [null, [1, 825], [1, 904]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("trainwhistle/templates/landing/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1638
            },
            "end": {
              "line": 1,
              "column": 1703
            }
          },
          "moduleName": "trainwhistle/templates/landing/sign-up.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Log In");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1799
          }
        },
        "moduleName": "trainwhistle/templates/landing/sign-up.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "image-box");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "/images/logo-color.svg");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "text-center");
        var el2 = dom.createElement("small");
        var el3 = dom.createTextNode("We help you know when you need to leave to get to your train or bus at the right moment for you to get to work on time, stress-free.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.setAttribute(el1, "class", "spacer");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "fields-row");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-field");
        var el4 = dom.createElement("label");
        var el5 = dom.createTextNode("First Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-field");
        var el4 = dom.createElement("label");
        var el5 = dom.createTextNode("Last Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-field top-layer required");
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Phone Number");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-field required");
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Email Address");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-field required");
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Password");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-field required");
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Confirm Password");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "buttons-row");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "btn btn-success btn-main");
        var el4 = dom.createTextNode("Sign Up");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0]);
        var element1 = dom.childAt(fragment, [3]);
        var element2 = dom.childAt(element1, [0]);
        var morphs = new Array(9);
        morphs[0] = dom.createAttrMorph(element0, 'width');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [0]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [2]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element1, [4]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "width", 400, 0, 0, 0, 0], ["element", "action", ["register"], ["on", "submit"], ["loc", [null, [1, 280], [1, 313]]], 0, 0], ["inline", "input", [], ["placeholder", "John", "type", "text", "name", "first_name", "autocapitalize", "words", "autocorrect", "off", "autocomplete", "given-name", "inputmode", "latin-name", "value", ["subexpr", "@mut", [["get", "firstName", ["loc", [null, [1, 540], [1, 549]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 387], [1, 551]]], 0, 0], ["inline", "input", [], ["placeholder", "Doe", "type", "text", "name", "last_name", "autocapitalize", "words", "autocorrect", "off", "autocomplete", "family-name", "inputmode", "latin-name", "value", ["subexpr", "@mut", [["get", "lastName", ["loc", [null, [1, 757], [1, 765]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 605], [1, 767]]], 0, 0], ["inline", "intl-tel-input", [], ["type", "tel", "autocapitalize", "none", "autocorrect", "on", "autocomplete", "tel", "name", "phone", "placeholder", "+1 (555) 555-555", "inputmode", "tel", "required", true, "number", ["subexpr", "@mut", [["get", "phone", ["loc", [null, [1, 1016], [1, 1021]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 849], [1, 1023]]], 0, 0], ["inline", "input", [], ["placeholder", "john.doe@example.com", "type", "email", "name", "email", "autocapitalize", "off", "autocorrect", "off", "autocomplete", "email", "required", true, "inputmode", "email", "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [1, 1257], [1, 1262]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 1090], [1, 1264]]], 0, 0], ["inline", "input", [], ["placeholder", "password", "type", "password", "name", "password", "required", true, "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [1, 1409], [1, 1417]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 1326], [1, 1419]]], 0, 0], ["inline", "input", [], ["placeholder", "password", "type", "password", "name", "password_confirmation", "required", true, "value", ["subexpr", "@mut", [["get", "passwordConfirmation", ["loc", [null, [1, 1585], [1, 1605]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 1489], [1, 1607]]], 0, 0], ["block", "link-to", ["landing.log-in"], ["class", "btn btn-ghost-default"], 0, null, ["loc", [null, [1, 1638], [1, 1715]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("trainwhistle/templates/product", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 8
            },
            "end": {
              "line": 1,
              "column": 108
            }
          },
          "moduleName": "trainwhistle/templates/product.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "/images/logo-icon-white.svg");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'width');
          return morphs;
        },
        statements: [["attribute", "width", 45, 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 166
            }
          },
          "moduleName": "trainwhistle/templates/product.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Dashboard");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 178
            },
            "end": {
              "line": 1,
              "column": 213
            }
          },
          "moduleName": "trainwhistle/templates/product.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Alarms");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 225
            },
            "end": {
              "line": 1,
              "column": 262
            }
          },
          "moduleName": "trainwhistle/templates/product.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Profile");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 329
          }
        },
        "moduleName": "trainwhistle/templates/product.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 0, 0);
        morphs[1] = dom.createMorphAt(element2, 0, 0);
        morphs[2] = dom.createMorphAt(element2, 1, 1);
        morphs[3] = dom.createMorphAt(element2, 2, 2);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["product.profile"], ["class", "home-link"], 0, null, ["loc", [null, [1, 8], [1, 120]]]], ["block", "link-to", ["product.dashboard"], [], 1, null, ["loc", [null, [1, 125], [1, 178]]]], ["block", "link-to", ["product.alarms"], [], 2, null, ["loc", [null, [1, 178], [1, 225]]]], ["block", "link-to", ["product.profile"], [], 3, null, ["loc", [null, [1, 225], [1, 274]]]], ["content", "outlet", ["loc", [null, [1, 295], [1, 305]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("trainwhistle/templates/product/alarms/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "trainwhistle/templates/product/alarms/edit.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/product/alarms/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 689
          }
        },
        "moduleName": "trainwhistle/templates/product/alarms/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-box");
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("My Alarms");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Set an alarm to let you know when you need to leave your home to reach MARTA in time to get work. We'll check on all the trains and make sure to notify you early enough that you're always on time.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "alarm");
        var el5 = dom.createElement("h3");
        var el6 = dom.createTextNode("Morning Wake Up Call - ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-danger");
        var el7 = dom.createTextNode("Red Line");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(", Five Points");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "time-info");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-clock-o");
        var el7 = dom.createTextNode("  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("Get on train between 9:00am and 9:30am  |  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-calendar");
        var el7 = dom.createTextNode("  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("M, W, F");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "background-image: url('/images/marta-train.jpg');");
        dom.setAttribute(el1, "class", "image-underlay");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/product/alarms/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "trainwhistle/templates/product/alarms/new.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/product/alarms/show", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "trainwhistle/templates/product/alarms/show.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/product/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "trainwhistle/templates/product/dashboard.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("trainwhistle/templates/product/profile/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1339
            },
            "end": {
              "line": 1,
              "column": 1415
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1427
            },
            "end": {
              "line": 1,
              "column": 1514
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Save Changes");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1660
          }
        },
        "moduleName": "trainwhistle/templates/product/profile/edit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row align-stretch flex-grow");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col");
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Edit Profile");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Feel free to edit the contact information below. You must provide your password to update it.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "fields-row");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-field");
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("First Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-field");
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("Last Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-field");
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Phone Number");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-field required");
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Email Address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "spacer");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "buttons-row");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "background-image: url('/images/marta-station.jpg');");
        dom.setAttribute(el2, "class", "col imaged full-page-right hidden-xs");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 0]);
        var element1 = dom.childAt(element0, [2]);
        var element2 = dom.childAt(element1, [0]);
        var element3 = dom.childAt(element0, [4]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [0]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [2]), 1, 1);
        morphs[6] = dom.createMorphAt(element3, 0, 0);
        morphs[7] = dom.createMorphAt(element3, 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "page-title", ["Edit Profile"], [], ["loc", [null, [1, 0], [1, 24]]], 0, 0], ["element", "action", ["update"], ["on", "submit"], ["loc", [null, [1, 209], [1, 240]]], 0, 0], ["inline", "input", [], ["type", "text", "autocapitalize", "words", "autocorrect", "off", "autocomplete", "given-name", "name", "name", "placeholder", "John", "required", true, "inputmode", "latin-name", "value", ["subexpr", "@mut", [["get", "sessionAccount.currentUser.first_name", ["loc", [null, [1, 475], [1, 512]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 314], [1, 514]]], 0, 0], ["inline", "input", [], ["type", "text", "autocapitalize", "words", "autocorrect", "off", "autocomplete", "family-name", "name", "name", "placeholder", "Doe", "required", true, "inputmode", "latin-name", "value", ["subexpr", "@mut", [["get", "sessionAccount.currentUser.last_name", ["loc", [null, [1, 729], [1, 765]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 568], [1, 767]]], 0, 0], ["inline", "intl-tel-input", [], ["type", "tel", "autocapitalize", "none", "autocorrect", "on", "autocomplete", "tel", "name", "phone", "placeholder", "+1 (555) 555-555", "inputmode", "tel", "value", ["subexpr", "@mut", [["get", "sessionAccount.currentUser.phone", ["loc", [null, [1, 982], [1, 1014]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 830], [1, 1016]]], 0, 0], ["inline", "input", [], ["type", "email", "autocapitalize", "off", "autocorrect", "off", "autocomplete", "email", "name", "email", "placeholder", "john.doe@gmail.com", "required", true, "inputmode", "email", "value", ["subexpr", "@mut", [["get", "sessionAccount.currentUser.email", ["loc", [null, [1, 1248], [1, 1280]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 1083], [1, 1282]]], 0, 0], ["block", "link-to", ["product.profile.show"], ["class", "btn btn-ghost-default btn-sm"], 0, null, ["loc", [null, [1, 1339], [1, 1427]]]], ["block", "link-to", ["product.profile.show"], ["class", "btn btn-success btn-sm btn-main"], 1, null, ["loc", [null, [1, 1427], [1, 1526]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("trainwhistle/templates/product/profile/show", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 272
            },
            "end": {
              "line": 1,
              "column": 371
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "value");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
          return morphs;
        },
        statements: [["content", "sessionAccount.currentUser.name", ["loc", [null, [1, 330], [1, 365]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 371
            },
            "end": {
              "line": 1,
              "column": 441
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "missing-field", [], ["field", "Name", "location", "product.profile.edit"], ["loc", [null, [1, 379], [1, 441]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 527
            },
            "end": {
              "line": 1,
              "column": 628
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "value");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
          return morphs;
        },
        statements: [["content", "sessionAccount.currentUser.email", ["loc", [null, [1, 586], [1, 622]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 628
            },
            "end": {
              "line": 1,
              "column": 699
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "missing-field", [], ["field", "Email", "location", "product.profile.edit"], ["loc", [null, [1, 636], [1, 699]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 779
            },
            "end": {
              "line": 1,
              "column": 880
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "value");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
          return morphs;
        },
        statements: [["content", "sessionAccount.currentUser.phone", ["loc", [null, [1, 838], [1, 874]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 880
            },
            "end": {
              "line": 1,
              "column": 951
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "missing-field", [], ["field", "Phone", "location", "product.profile.edit"], ["loc", [null, [1, 888], [1, 951]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 993
            },
            "end": {
              "line": 1,
              "column": 1074
            }
          },
          "moduleName": "trainwhistle/templates/product/profile/show.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Edit My Profile");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1214
          }
        },
        "moduleName": "trainwhistle/templates/product/profile/show.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row align-stretch flex-grow");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col");
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("My Profile");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Here's the contact information we currently have on file for you:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "box");
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "details-list");
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "label");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-user");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "label");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-envelope-o");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Email Address");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "label");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-phone");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Phone Number");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "spacer");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "background-image: url('/images/marta-station.jpg');");
        dom.setAttribute(el2, "class", "col imaged full-page-right hidden-xs");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 0]);
        var element1 = dom.childAt(element0, [2, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [0]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [2]), 1, 1);
        morphs[4] = dom.createMorphAt(element0, 4, 4);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "page-title", ["My Profile"], [], ["loc", [null, [1, 0], [1, 22]]], 0, 0], ["block", "if", [["get", "sessionAccount.currentUser.name", ["loc", [null, [1, 278], [1, 309]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 272], [1, 448]]]], ["block", "if", [["get", "sessionAccount.currentUser.email", ["loc", [null, [1, 533], [1, 565]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [1, 527], [1, 706]]]], ["block", "if", [["get", "sessionAccount.currentUser.phone", ["loc", [null, [1, 785], [1, 817]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [1, 779], [1, 958]]]], ["block", "link-to", ["product.profile.edit"], ["class", "btn btn-primary btn-sm"], 6, null, ["loc", [null, [1, 993], [1, 1086]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  })());
});
define('trainwhistle/utils/titleize', ['exports', 'ember-composable-helpers/utils/titleize'], function (exports, _emberComposableHelpersUtilsTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersUtilsTitleize['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('trainwhistle/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"trainwhistle","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"trainwhistle","version":"0.0.0+58f03de9"},"ember-simple-auth":{"authenticationRoute":"landing.log-in","routeAfterAuthentication":"product.dashboard","routeIfAlreadyAuthenticated":"product.dashboard"},"ember-cli-post-build-copy":{"replace":true,"verbose":false,"development":[["/assets/vendor.js","../web/static/vendor/vendor.js"],["/assets/trainwhistle.js","../web/static/vendor/trainwhistle.js"],["/assets/vendor.css","../web/static/css/vendor.css"],["/assets/trainwhistle.css","../web/static/css/trainwhistle.css"],["/images/city-poster.jpg","../web/static/assets/images/city-poster.jpg"],["/images/favicon.png","../web/static/assets/images/favicon.png"],["/images/logo-color.svg","../web/static/assets/images/logo-color.svg"],["/images/logo-icon-white.svg","../web/static/assets/images/logo-icon-white.svg"],["/images/logo.svg","../web/static/assets/images/logo.svg"],["/videos/city.mp4","../web/static/assets/videos/city.mp4"]]},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("trainwhistle/app")["default"].create({"name":"trainwhistle","version":"0.0.0+58f03de9"});
}

/* jshint ignore:end */
//# sourceMappingURL=trainwhistle.map
