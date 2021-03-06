import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { inject as service } from '@ember/service';

import SessionService from 'nou2ube/services/session';

export default class IndexRoute extends Route {
  @service declare router: RouterService;
  @service declare session: SessionService;

  async beforeModel(transition: Transition): Promise<void> {
    if (this.session.me || this.session.down) {
      this.router.transitionTo('feed');
    } else {
      this.router.transitionTo('landing');
    }
  }
}
