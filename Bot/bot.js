
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');


const TOKEN = '6696134776:AAE8kA_eKiW0rR-h6lNqHmuARl7zMJod7vQ'
const link = ""
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome', 
{reply_markup:
    {keyboard:
        [[{ text: "web app", web_app: link}]]
        }}
       )
    );

bot.launch();