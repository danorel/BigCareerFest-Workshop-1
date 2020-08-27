const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const { msgStart, msgYes, msgNo } = require('./config');

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
                    m.callbackButton('Yes', 'ActionHandlerOrder'),
                    m.callbackButton('No', 'ActionHandlerReject')
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
        ctx.reply(msgNo);
    }
);
bot.action('ActionHandlerOrder',
    ctx => {
        const { from: { id, username } } = ctx.update.callback_query;
        console.log({
            id,
            username
        }); // Id and username of the person, who started conversation
        /* Write down new user in temporary storage */
       
            ctx.reply(msgYes);
            // ctx.replyWithPhoto("images\pizza.jpg");
        
    }
);
bot.on('message', 
    ctx => {
        ctx.reply(ctx.update.message.text)
        
    });
    


// git commit -m "[Short description of the features, bugs, errors, blabla] Detailed information about this featurem, fixed bug, etc"