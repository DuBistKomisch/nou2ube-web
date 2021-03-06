import EmberRouter from '@ember/routing/router';

import config from 'nou2ube/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('feed');
  this.route('landing');
  this.route('privacy');
});
