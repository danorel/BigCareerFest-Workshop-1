const {
    bot,
    Extra
} = require('../../../../../../configs/telegram/bot');

const { msgCase1 } = require('../config');
const { visitor } = require('../../../../../../configs/google/analytics');

bot.action('ActionHandlerCase1',
    ctx => {
        /* Trigger /confirmation GA action */
        visitor
            .event("@PCBankBot", "Click", "/questionnaire/schedule/confirmation")
            .send();
        /* Send confirmation keyboard */
        ctx.reply(
            msgCase1,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('Так', 'QuestionResumeConfirmation'),
                    m.callbackButton('Ні', 'QuestionResumeRejection')
                ])
            )
        )
    });