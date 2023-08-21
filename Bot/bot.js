import { Telegraf } from "telegraf";



const TOKEN = '6696134776:AAFfubBmZbNmgFFxaYV82Rxv9q6038AsFG8'
const link = "https://freelancers-bot.vercel.app/"
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Welcome in my channel', 
{reply_markup:
    {inline_keyboard:
        [[{ text: "View the Shop", web_app: {url:link}}]]
        }},
       )
    );
 
bot.launch();