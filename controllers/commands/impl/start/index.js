const {
    bot,
    Extra
} = require('../../../../configs/telegram/bot');

const conf = require('./config');
const {
    visitor
} = require('../../../../configs/google/analytics');


bot.command('start',
    ctx => {
        console.log(ctx.update.message.from);
        visitor
            .event(conf.botName, conf.action, "/start")
            .send();

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
