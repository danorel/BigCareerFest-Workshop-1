const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const config = {
    port: process.env.PORT,
    link: process.env.BOT_USERNAME,
    token: process.env.BOT_TOKEN,
    chatUsername: process.env.TELEGRAM_CHAT_USERNAME
};

/* Initializing the telegram bot */
const bot = new Telegraf(config.token);

module.exports = {
    // Export the bot configurations
    bot,
    ...config,
    // Export the libraries
    Extra,
    Markup,
    Telegraf
};