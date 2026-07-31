const { App } = require('@slack/bolt');
require('dotenv').config();

// Initialize the bot with your secret tokens
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Command 1: /by-order-of
app.command('/by-order-of', async ({ command, ack, respond }) => {
  await ack();

  const task = command.text;

  if (!task) {
    await respond('You need to state an order! Usage: `/by-order-of finish the report`');
    return;
  }

  await respond({
    response_type: 'in_channel', // Visible to everyone in the channel
    text: `🗣️ *BY ORDER OF THE PEAKY BLINDERS:*\n\nAll focus on: *${task}*!`
  });
});

// Start the app
(async () => {
  await app.start();
  console.log('⚡️ Shelby Company Ltd. is online and open for business!');
})();