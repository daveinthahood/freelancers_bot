import { Telegraf } from "telegraf";



const TOKEN = '6696134776:AAE8kA_eKiW0rR-h6lNqHmuARl7zMJod7vQ'
const link = "https://freelancers-bot.vercel.app/"
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Welcome in my channel', 
{reply_markup:
    {inline_keyboard:
        [[{ text: "web app", web_app: {url:link}}]]
        }}
       )
    );
 
bot.launch();