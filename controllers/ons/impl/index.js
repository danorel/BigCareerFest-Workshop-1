const { bot } = require('../../../configs/telegram/bot');

bot.on('message',

    ctx => {
        visitor
        .event(conf.botName, conf.action, "controllers\ons\impl\index.js")
        .send();
        ctx.reply(ctx.update.message.text);
    });