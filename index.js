
const TelegramBot = require('node-telegram-bot-api');

const token = '5056184344:AAEnW0fizGN4dlUK3-hz3WeM0nx_DKuSneQ';

const bot = new TelegramBot(token, {polling: true});
var exec = require('child_process').exec;
const fs = require('fs')
bot.onText(/salom/, (msg, match) => {
 var fromId = msg.from.id;
 bot.sendMessage(fromId, "sen kotsan hazil bu");

});
bot.onText(/del (.+)/, (msg, match) => {
 var fromId = msg.from.id;
 exec('del '+match[1]);
 bot.sendMessage(fromId, 'File"'+match[1]+'"deleted');

});
bot.onText(/copy (.+) (.+)/, (msg, match) => {
  var fromId = msg.from.id;
  exec('copy  '+ match[1]+' '+match[2]);
  bot.sendMessage(fromId, 'Файл"' + match[1] + '"скопирован в"'+match[2]+'"');


});

bot.onText(/list (.+)/, (msg, match) => {
  var fromId = msg.from.id;
  fs.readdir(match[1], function(err, files){
    if(err) bot.sendMessage(fromId, 'Чувак! эта папка не найдена или к ней нет доступа!')
  else{
      let list = '';
      files.forEach(function (file) {
        list += file + '\n';
      });
      bot.sendMessage(fromId, list)
  }
  })
 
});
