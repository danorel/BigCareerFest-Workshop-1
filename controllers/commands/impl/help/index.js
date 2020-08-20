const { bot } = require('../../../../configs/telegram/bot');
const { msgHelp } = require('./config');

bot.command('help',
    ctx => {
        /* Make /help reply keyboard */
        ctx.reply(msgHelp)
    });
