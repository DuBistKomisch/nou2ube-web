import Component from '@glint/environment-ember-loose/glimmer-component';

export type IconName = 'bookmark' | 'gift' | 'inbox' | 'list' | 'loader' | 'lock' | 'log-in' | 'log-out' | 'slash' | 'sliders' | 'trash';

interface Signature {
  Args: {
    name: IconName;
    size?: number;
  };
}

export default class SvgIconComponent extends Component<Signature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    SvgIcon: typeof SvgIconComponent;
  }
}
