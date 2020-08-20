const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const { msgStart } = require('./config');

bot.action('ActionHandlerStart',
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

/*
 * Import the cases of the schedule application steps.
 */
require('./cases/case-1');
require('./cases/case-2');
