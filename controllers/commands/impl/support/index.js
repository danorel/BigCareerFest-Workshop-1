const { bot } = require('../../../../configs/telegram/bot');
const { msgSupport }=require('./config');
bot.command('support',
    ctx => {
        /* Make /help reply keyboard */
        ctx.reply(msgSupport)
    });