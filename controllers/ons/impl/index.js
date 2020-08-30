const { bot } = require('../../../configs/telegram/bot');

bot.on('message',
    ctx => {
        console.log(ctx.update.message.text);
        ctx.reply(ctx.update.message.text);
    });