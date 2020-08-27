const { bot } = require('../../../../configs/telegram/bot');
const { msgSupport }=require('./config');
bot.command('support',
    ctx => ctx.reply(msgSupport));
        /* Make /help reply keyboard */
        
   