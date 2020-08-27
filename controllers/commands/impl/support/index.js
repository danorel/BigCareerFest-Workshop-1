const {
    bot,
    Extra
} = require('../../../../configs/telegram/bot');

const {msgSupport} = require('./config');

bot.command('support',
    ctx => {
        /* Reply with support message */
        ctx.reply(
            msgSupport
        );
    }
);
