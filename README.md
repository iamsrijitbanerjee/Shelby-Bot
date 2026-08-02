# Shelby Company Ltd. Bot

Welcome to the Shelby Company Ltd. Slack bot. I built this project to bring a bit of the Peaky Blinders' ruthless productivity and aesthetic into our daily Slack workspace. Instead of boring reminders and standard notifications, this bot acts as the management of the Shelby Company, ensuring tasks are broadcasted, meetings are called, and everyone stays on track—by order of the Peaky Blinders.

## The Theme & Concept
Standard utility bots can be incredibly dry. I wanted to fulfill the Hack Club submission requirements (a 24/7 bot with 3+ unique commands) while building something genuinely fun to interact with. By wrapping productivity tools in the stoic, business-focused aesthetic of Thomas Shelby, the bot feels authoritative and highly unique, ensuring its slash commands will never collide with other integrations in a workspace.

##  Tech Stack
* **Language:** JavaScript (Node.js)
* **Framework:** `@slack/bolt`
* **Security:** `dotenv` (for managing local environment variables)
* **Hosting:** Hack Club Nest (Debian Linux)
* **Process Manager:** `systemd` (Native Linux daemon)

##  Features & Commands
The bot is currently equipped with five distinct slash commands to manage your workspace:

1. `/by-order-of [task]` 
   **Use:** Broadcasts a dramatic, high-priority task alert to the entire channel.
2. `/family-meeting [topic]` 
   **Use:** Immediately calls a structured "Family Meeting," establishing an instant thread for team updates on a specific project.
3. `/shelby-quote` 
   **Use:** Drops a randomized, stoic quote from the Peaky Blinders universe to boost channel morale during tough deadlines.
4. `/shelby-ledger [task]` 
   **Use:** Mimics Tommy Shelby's accounting books, allowing users to log a quick item into the shared team record.
5. `/shelby-focus [minutes]` 
   **Use:** A specialized focus timer that initiates a period of deep work and drops a notification when the time is up.

![Commands Chart](commands.png)

##  Challenges Faced
The development process had a few distinct learning curves:
* **Terminal Restrictions:** I initially ran into issues installing my dependencies because Windows PowerShell's strict execution policies blocked `npm`. I had to learn how to override this using `Set-ExecutionPolicy RemoteSigned`.
* **The 3-Second Rule:** While adding new commands, Slack continually threw a "failed because the app did not respond" error. This taught me about Slack's strict 3-second `ack()` acknowledgment window, and the necessity of restarting the local Node server to ensure new code was actively listening for those payloads.
* **Linux Server Administration:** Moving from a local Windows environment to a raw, headless Debian server via SSH on Hack Club Nest was a massive jump. I had to learn how to install Git and Node via `apt`, navigate the server without a mouse, forge `.env` files using `nano`, and ultimately wire the application into the server's native `systemd` architecture so it could survive reboot cycles.

##  How to Use and Test Locally
If you want to run the Shelby Company locally in your own workspace, follow these steps:

**1. Set up the Slack App**
* Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new app.
* Navigate to **Socket Mode** and enable it (Generate an App Token `xapp-...`).
* Navigate to **OAuth & Permissions** and add the `commands` and `chat:write` scopes.
* Install to your workspace and copy the Bot Token (`xoxb-...`).

**2. Clone and Configure**
* Clone this repository to your machine: `git clone https://github.com/YOUR_USERNAME/Shelby-Bot.git`
* Navigate into the folder: `cd Shelby-Bot`
* Install dependencies: `npm install`
* Create a `.env` file in the root directory and add your tokens:
  ```text
  SLACK_BOT_TOKEN=xoxb-your-bot-token
  SLACK_APP_TOKEN=xapp-your-app-token