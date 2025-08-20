const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const bot = new TelegramBot(8286827669:AAHysCIH6hh8luB-lqsGoBQtGbA02mXy4Io, { polling: true });

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ WhatsApp bot is ready!');
});

client.initialize();

bot.on('video', async (msg) => {
  const fileId = msg.video.file_id;
  const file = await bot.getFile(fileId);
  const url = `https://api.telegram.org/file/bot${8286827669:AAHysCIH6hh8luB-lqsGoBQtGbA02mXy4Io}/${file.file_path}`;

  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const videoBuffer = Buffer.from(response.data, 'binary');

  const groupId = KKnWrnomh1E6dE7QjvOpEV;

  client.sendMessage(groupId, videoBuffer, { sendMediaAsDocument: false })
    .then(() => console.log("📤 Sent video to WhatsApp"))
    .catch(err => console.error("❌ Error:", err));
});


