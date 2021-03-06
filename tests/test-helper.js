import { setApplication } from '@ember/test-helpers';

import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';
import * as QUnit from 'qunit';

import Application from 'nou2ube/app';
import config from 'nou2ube/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
