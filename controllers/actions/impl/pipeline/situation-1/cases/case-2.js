const {
    bot,
    Extra
} = require('../../../../../../configs/telegram/bot');

const { visitor } = require('../../../../../../configs/google/analytics');
const { msgCase2 } = require('../config');

bot.action('ActionHandlerCase2',
    ctx => {
        /* Trigger /doubting GA action */
        visitor
            .event("@PCBankBot", "Click", "/questionnaire/schedule/doubting")
            .send();
        /* Send doubting keyboard */
        ctx.reply(
            msgCase2,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Так', 'QuestionResumeConfirmation'),
                    m.callbackButton('Ні', 'QuestionResumeRejection')
                ])
            )
        )
    });