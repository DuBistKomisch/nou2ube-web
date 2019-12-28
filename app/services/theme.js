import { action, get, set } from '@ember/object';
import Service from '@ember/service';

import { storageFor } from 'ember-local-storage';

import config from 'nou2ube/config/environment';
const { themes } = config;

export default class ThemeService extends Service {
  @storageFor('settings') settings;

  #themeClass = '';

  applyTheme() {
    let newThemeClass = `theme--${get(this, 'settings.theme')}`;
    if (newThemeClass !== this.#themeClass) {
      if (this.#themeClass) {
        document.querySelector('body').classList.remove(this.#themeClass);
      }
      if (newThemeClass) {
        document.querySelector('body').classList.add(newThemeClass);
      }
      this.#themeClass = newThemeClass;
    }
  }

  @action
  switchTheme() {
    let currentThemeIndex = themes.indexOf(get(this, 'settings.theme'));
    let newThemeIndex = (currentThemeIndex + 1) % themes.length;
    set(this, 'settings.theme', themes[newThemeIndex]);
    this.applyTheme();
  }
}
