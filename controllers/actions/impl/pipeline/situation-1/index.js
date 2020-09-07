const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const { msgStart, msgYes, msgNo } = require('./config');
const { visitor }= require('../../../../../configs/google/analytics');
const conf=require('../situation-1/config');

bot.action('ActionHandlerWantPizza',
    ctx => { 
       
   
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
        visitor
        .event(conf.botName, conf.action, "/orderConfirmation")
        .send();
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
        .event(conf.botName, conf.action, "ActionHandlerOrder")
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
