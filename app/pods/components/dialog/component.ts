import Component from '@glint/environment-ember-loose/glimmer-component';

interface Signature {
  Args: {
    accept?: () => void;
    acceptLabel?: string;
    cancelLabel?: string;
    close?: () => void;
    title?: string;
  };
  Yields: {
    default: [];
  };
}

export default class DialogComponent extends Component<Signature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Dialog: typeof DialogComponent;
  }
}
