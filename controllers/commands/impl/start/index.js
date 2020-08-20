const {
    bot,
    Extra
} = require('../../../../configs/telegram/bot');

const { msgStart } = require('./config');

bot.command('start',
    ctx => {
        /* Make /start reply keyboard */
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Так!', 'ActionHandlerStart')
                ])
            )
        );
    }
);
