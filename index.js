const Discord = require('discord.js');
const axios = require ('axios')
const bot = new Discord.Client();

const token = "NjkwMTMyODQ4MjU0MTI0MDUy.XnM-bQ.H2WbNMOFtKqw_G_w7N359fUsQ7I";

bot.on('ready',() =>{
    console.log('Welcome back Radz!');

})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "Hello"){
    msg.reply('Halo :hand_splayed_tone1: , Im baby bot. Can i help you?');
    }
})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "Im so sad"){
    msg.reply('Dont be sad sweetheart, i am always here for you :heart:');
    }

})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "Hi"){
    msg.reply('Hello How are you?');
    }

})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "hahaha"){
    msg.reply('Aha your kinda happy today Laah!');
    }
})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "im so happy"){
    msg.reply('Wow really? im glad to heard that');
    }     

    
})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "brb"){
    msg.reply('See Ya :wink: ');
    }  

})

//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "Good Morning"){
    msg.reply('Good morning sweetheart');
    }  

})
//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "fuck"){
    msg.reply('bad bad :face_with_raised_eyebrow: ');} 

})
//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "rank!"){
    msg.reply('Level 9999999 :joy: :joy: :joy: ');} 

})
//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "hi baby bot"){
    msg.reply('Hello sweetheart :heart:  how are you?');} 

})
//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "im good how about you?"){
    msg.reply('Am fine now because of you :heart: Ayeee :relaxed: ');} 

})
//Message auto reply
bot.on('message', msg=>{
    if(msg.content === "what should we do tomorrow morning?"){
    msg.reply('patrol patrol patrol!:heart:'
    );

} 




//jokes
if (command === "joke") {
    let getJoke = async () => {
        let Response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
);
let joke = Response.data;
return joke;
    };
    let jokeValue = await getJoke();
    console.log(jokeValue);
    msg.reply(
        'Hers your joke \n ${jokeValue.setup} \n\n $jokeValue.punchline}'
    );
}


})

bot.login(token);