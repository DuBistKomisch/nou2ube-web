import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glint/environment-ember-loose/glimmer-component';

import ItemModel from 'nou2ube/models/item';
import SettingsService from 'nou2ube/services/settings';

interface Signature {
  Args: {
    items: ItemModel[];
  };
}

export default class ItemsComponent extends Component<Signature> {
  @service declare settings: SettingsService;

  @tracked autoplayId: string | null = null;

  get itemsSorted(): ItemModel[] {
    const { videoKey, videoDir } = this.settings;

    const sorted = this.args.items.sortBy(videoKey);
    if (videoDir === 'desc') {
      sorted.reverse();
    }
    return sorted;
  }

  @action
  embedEnded(item: ItemModel): void {
    const items = this.itemsSorted;
    this.autoplayId = items[items.indexOf(item) + 1]?.id;
  }

  @action
  embedToggled(): void {
    this.autoplayId = null;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Items: typeof ItemsComponent;
  }
}
