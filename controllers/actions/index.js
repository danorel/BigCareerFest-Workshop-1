const bot = require('../../configs/telegram/bot');

/* Import all user-actions */
require('./impl/pipeline/situation-1');
bot.on('message', (msg) =>{
    console.log(msg);
bot.sendMessage(msg.chat.id, "Hello!")
})