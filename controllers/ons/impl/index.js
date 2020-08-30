const { bot } = require('C:\Users\Elyza\Documents\JavascriptFest\BigCareerFest-Workshop-1\configs\telegram\bot.js');
bot.on('message',
    ctx => {
        console.log(ctx.update.message.text);
        ctx.reply(ctx.update.message.text);

    });