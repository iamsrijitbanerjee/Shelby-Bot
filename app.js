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

// Command 2: /family-meeting
app.command('/family-meeting', async ({ command, ack, respond }) => {
  await ack();
  
  // If they don't provide a topic, default to "company business"
  const topic = command.text || "company business";

  await respond({
    response_type: 'in_channel',
    text: `🕰️ *FAMILY MEETING CALLED*\n\nBy order of management, we are discussing: *${topic}*.\nEveryone report to the Watery Lane boardroom (or drop your updates in a thread below).`
  });
});

// Command 3: /shelby-quote
app.command('/shelby-quote', async ({ ack, respond }) => {
  await ack();
  
  // An array of classic Peaky Blinders quotes
  const quotes = [
    "You can change what you do, but you can't change what you want.",
    "The only way to guarantee peace is by making the prospect of war seem hopeless.",
    "Good taste is for people who can't afford sapphires.",
    "I don't pay for suits. My suits are on the house or the house burns down."
  ];
  
  // Pick a random quote from the list
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  await respond({
    response_type: 'in_channel',
    text: `🥃 *Word from Thomas Shelby:*\n> "${randomQuote}"`
  });
});

// Command 4: /shelby-ledger
app.command('/shelby-ledger', async ({ command, ack, respond }) => {
  await ack();
  
  const entry = command.text;
  if (!entry) {
    await respond('The ledger requires an entry! Usage: `/shelby-ledger secured the new contract`');
    return;
  }

  await respond({
    response_type: 'in_channel',
    text: `📖 *LEDGER UPDATED:*\nThomas has noted: _"${entry}"_. Good business.`
  });
});

// Command 5: /shelby-coin
app.command('/shelby-coin', async ({ ack, respond }) => {
  await ack();
  
  const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
  
  await respond({
    response_type: 'in_channel',
    text: `🪙 *Flipping the coin...*\n\nIt landed on **${outcome}**. The universe has spoken, get on with it.`
  });
});


// Start the app
(async () => {
  await app.start();
  console.log('⚡️ Shelby Company Ltd. is online and open for business!');
})();