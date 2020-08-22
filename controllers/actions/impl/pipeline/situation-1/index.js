const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const { msgStart } = require('./config');

bot.action('ActionHandlerWantPizza',
    ctx => {
        const { from: { id, username } } = ctx.update.callback_query;
        console.log({
            id,
            username
        }); // Id and username of the person, who started conversation
        /* Write down new user in temporary storage */
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Case1', 'ActionHandlerCase1'),
                    m.callbackButton('Case2', 'ActionHandlerCase2')
                ])
            )
        );
    }
);

bot.action("ActionHandlerDon'tWantPizza",
    ctx => {
        const { from: { id, username } } = ctx.update.callback_query;
        console.log({
            id,
            username
        }); // Id and username of the person, who started conversation
        /* Write down new user in temporary storage */
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Case1', 'ActionHandlerCase1'),
                    m.callbackButton('Case2', 'ActionHandlerCase2')
                ])
            )
        );
    }
);

// git commit -m "[Short description of the features, bugs, errors, blabla] Detailed information about this featurem, fixed bug, etc"