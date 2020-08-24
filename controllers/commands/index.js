const bot = require('../../configs/telegram/bot');

/* Import all middleware and export as /commands */
require('./impl/help');
require('./impl/start');
require('./impl/support');
