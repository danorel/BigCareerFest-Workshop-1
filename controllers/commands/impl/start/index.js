const {
    bot,
    Extra
} = require('../../../../configs/telegram/bot');

const { msgStart } = require('./config');

bot.command('start',
    ctx => {
        console.log(ctx.update.message.from);
        /* Make /start reply keyboard */
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('What do you have for me?', 'ActionHandlerWantPizza'),
                    m.callbackButton("No. I don’t want anything, dude...", "ActionHandlerDon'tWantPizza")
                ])
            )
        );
    }
);
