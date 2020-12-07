import 'jquery';
import 'popper.js';
import 'bootstrap';

import Sorter from 'components/script';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');

Array.from(document.querySelectorAll('.js-tasklists')).forEach(($el) => {
  new Sorter($el);
});
