import { Telegraf } from "telegraf";



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
        reply_markup: {
            inline_keyboard: [
                [{text:"shop", url:"https://freelancers-bot.vercel.app/"}]
            ]
        }
    }
})
 
bot.launch();