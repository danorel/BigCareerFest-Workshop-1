const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const {
    msgQuestion,
    msgAnswerQuestion,
    msgYes,
    msgAnswerYes,
    msgNo,
    msgAnswerNo
} = require('./config')

bot.hears(msgQuestion, ctx => {
    ctx.reply(msgAnswerQuestion)
})

bot.hears(msgYes, ctx => {
    ctx.reply(msgAnswerYes)
})

bot.hears(msgNo, ctx => {
    ctx.reply(msgAnswerNo)
})

bot.on('text',
    ctx => {
        /* Echo the message */
        ctx.reply(
            ctx.update.message.text
        );
    }
);
