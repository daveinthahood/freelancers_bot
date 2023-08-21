import { Telegraf } from "telegraf";



const TOKEN = '6585830561:AAE7PRUPQo32byCcWPpwk5yKgv3q0lZR2HU'
const link = "https://heroic-lebkuchen-334a3c.netlify.app/"
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Welcome in my channel', 
{reply_markup:
    {inline_keyboard:
        [[{ text: "View the Shop", web_app: {url:link}}]]
        }},
       )
    );
 
bot.launch();