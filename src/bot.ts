//import section
import { Bot } from "grammy";
import * as dotenv from 'dotenv';

//configuration of plugins and bot
dotenv.config({ path: '.env.local' });
const bot = new Bot(`${process.env.BOT_API}`);


//definitions


//implementation
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.command("help",  (ctx) => {
    ctx.reply(`
    Current Available Commands:
    1. /start 
    2. /help
    3. /welcome
    `)
});

bot.hears("welcome", async (ctx)=>{
    try {
        const chatType = ctx.chat.type;
        const chatmemberCount = await ctx.api.getChatMemberCount(ctx.chat.id);
        ctx.reply(`This Chat is currently a ${ctx.chat.type} and have ${chatmemberCount} people`)
    } catch (error) {
        console.error("Error in /help command:", error);
    }
})

// Handle the /start command.

// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();