const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const { msgStart, msgYes, msgNo } = require('./config');
const { visitor }= require('../../../../../configs/google/analytics');

bot.action('ActionHandlerWantPizza',
    ctx => { 
        visitor
            .event(conf.botName, conf.action, "ActionHandlerOrder")
            .send();
   
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Yes! Of course, I am in!', 'ActionHandlerOrder'),
                    m.callbackButton('No. I don’t want anything, dude...', 'ActionHandlerReject')
                ])
            )
        );
    });

bot.action("ActionHandlerDon'tWantPizza",
    ctx => {
        visitor
        .event(conf.botName, conf.action, "ActionHandlerOrder")
        .send()
        .event(conf.botName, conf.action, 'ActionHandlerThanks')
        .send();
        ctx.reply(
            msgNo,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Ok, you have convinced me!', 'ActionHandlerOrder'),
                    m.callbackButton('No. That’s a great offer, but actually, I wanted burgers...Bye!', 'ActionHandlerThanks')
                ])
            )
        );
    });

bot.action('ActionHandlerOrder',
    ctx => {
        ctx.reply(
            msgYes,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Thanks for your great pizza, bye!', 'ActionHandlerThanks'),
                ])
            )
        );
    });

bot.action('ActionHandlerThanks',
    ctx => {
        ctx.reply('Bye! Have a nice day!');
    });

bot.action('ActionHandlerReject',
    ctx => {
        visitor
        .event(conf.botName, conf.action, "ActionHandlerThanks")
        .send();
        ctx.reply(
            msgNo,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Ok, you have convinced me!', 'ActionHandlerOrder'),
                    m.callbackButton('No. That’s a great offer, but actually, I wanted burgers...Bye!', 'ActionHandlerThanks')

                ])
            )
        );
    });
