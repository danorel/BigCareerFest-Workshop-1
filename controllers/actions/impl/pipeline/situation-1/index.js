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
                    m.callbackButton('Yes! Of course, I am in!', 'ActionHandlerOrder'),
                    m.callbackButton('No. I don’t want anything, dude...', 'ActionHandlerReject')
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
            msgNo,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Ok, you have convinced me!', 'ActionHandlerOrder'),
                    m.callbackButton('No. That’s a great offer, but actually, I wanted burgers...Bye!', 'ActionHandlerThanks')
    
                ])
            )
        );
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

        //ctx.reply(msgYes);

        ctx.reply(
            msgYes,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Thanks for your great pizza, bye!', 'ActionHandlerThanks'),

                ])
            )
        );
        // ctx.replyWithPhoto("images\pizza.jpg");

    }
);
bot.on('message',
    ctx => {
        ctx.reply(ctx.update.message.text)

    });

bot.action('ActionHandlerThanks',
    ctx => {
        ctx.reply('Bye! Have a nice day!');
    }
)
bot.action('ActionHandlerReject')
ctx => {
    const { from: { id, username } } = ctx.update.callback_query;
    console.log({
        id,
        username
    });

    ctx.reply(
        msgNo,
        Extra.HTML().markup((m) =>
            m.inlineKeyboard([
                m.callbackButton('Ok, you have convinced me!', 'ActionHandlerOrder'),
                m.callbackButton('No. That’s a great offer, but actually, I wanted burgers...Bye!', 'ActionHandlerThanks')

            ])
        )
    );


}


// git commit -m "[Short description of the features, bugs, errors, blabla] Detailed information about this featurem, fixed bug, etc"