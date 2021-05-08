import RouterService from '@ember/routing/router-service';
import { inject as service } from '@ember/service';
import Component from '@glint/environment-ember-loose/glimmer-component';

import SessionService from 'nou2ube/services/session';

export default class MenuBarComponent extends Component {
  @service declare router: RouterService;
  @service declare session: SessionService;

  get isOnFeed(): boolean {
    return this.router.currentRouteName === 'feed';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    MenuBar: typeof MenuBarComponent;
  }
}
