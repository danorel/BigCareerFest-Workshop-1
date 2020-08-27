const {
    bot,
    Extra
} = require('../../../../configs/telegram/bot');

const { msgStart } = require('./config');

const {msgQuestion, msgNo} = require('../../../actions/impl/pipeline/echo/config')

bot.command('start',
    ctx => {
        /* Make /start reply keyboard */
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.keyboard([
                    [msgQuestion, msgNo]
                ]).resize().oneTime()
            )
        );
    }
);
