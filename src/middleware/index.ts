import { Composer } from "grammy";

export const composer = new Composer();

composer.command("start", (ctx)=>{
    ctx.reply("Hello, This is bot-charles, feel free to check what can do by using /help ")
})

composer.command("help", (ctx)=>{
    ctx.reply("This is help")
})

