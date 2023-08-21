import { Telegraf } from "telegraf";



const TOKEN = '6696134776:AAE8kA_eKiW0rR-h6lNqHmuARl7zMJod7vQ'
const link = "https://freelancers-bot.vercel.app/"
const github = "https://github.com/daveinthahood"
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Welcome in my channel', 
{reply_markup:
    {inline_keyboard:
        [[{ text: "View the Shop", web_app: {url:link}}]]
        }},
{reply_markup:
    {inline_keyboard:
            [[{ text: "View my GitHub", web_app: {url:github}}]]
            }}
       )
    );
 
bot.launch();