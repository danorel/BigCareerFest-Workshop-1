
const { bot, Extra } = require('../../../../configs/telegram/bot');
const { msgSupport }=require('./config');
bot.command('support',
ctx => {
    
ctx.reply(
    msgSupport,
    Extra.HTML().markup((m) =>
        m.inlineKeyboard([
            m.urlButton('Redirect me to chat', 'https://t.me/danorel'),
            
        ])
    )
)
          });      /* Make /help reply keyboard */
     
   