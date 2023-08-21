import { Telegraf } from "telegraf";
import { url } from "telegraf/typings/button";
import { inlineKeyboard } from "telegraf/typings/markup";



const TOKEN = '6696134776:AAE8kA_eKiW0rR-h6lNqHmuARl7zMJod7vQ'
const link = "https://freelancers-bot.vercel.app/"
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Welcome', 
{reply_markup:
    {inline_keyboard:
        [[{ text: "web app", url:"https://freelancers-bot.vercel.app/"}]]
        }}
       )
    );
bot.command('shop', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, "dev shop"), {
        reply_markup: inlineKeyboard(text ='link', url='https://freelancers-bot.vercel.app/')
            
        }
    }
)

update.message.reply_text(
    'Subscribe to us on Facebook and Telegram:',
    reply_markup=([
        [inlineKeyboard(text='on Facebook', url='https://facebook.com')],
        [inlineKeyboard(text='on Telegram', url='https://t.me')],
    ])
)
 
bot.launch();