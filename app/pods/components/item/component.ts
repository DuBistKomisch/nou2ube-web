import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glint/environment-ember-loose/glimmer-component';

import ItemModel from 'nou2ube/models/item';
import SettingsService from 'nou2ube/services/settings';

interface Signature {
  Args: {
    autoplay: boolean;
    item: ItemModel;
    onEmbedEnded: () => void;
    onEmbedToggled: () => void;
  };
}

export default class ItemComponent extends Component<Signature> {
  @service declare settings: SettingsService;

  @tracked embed = false;

  get showEmbed(): boolean {
    return this.embed || this.args.autoplay;
  }

  get formattedDuration(): string {
    const { duration } = this.args.item.video;
    const seconds = `00${duration % 60}`.slice(-2);
    const minutes = `00${Math.floor(duration / 60) % 60}`.slice(-2);
    if (duration >= 60 * 60) {
      return `${Math.floor(duration / 60 / 60)}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  @action
  toggleEmbed(): void {
    this.embed = !this.showEmbed;
    this.args.onEmbedToggled();
  }

  @action
  markLater(): void {
    this.args.item.markLater();
  }

  @action
  markDeleted(): void {
    this.args.item.markDeleted();
  }

  @action
  embedEnded(): void {
    if (this.settings.autoplay) {
      this.embed = false;
      this.args.onEmbedEnded();
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Item: typeof ItemComponent;
  }
}
