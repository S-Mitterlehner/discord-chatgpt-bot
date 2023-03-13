# ChatGPT - Discord Bot

## Installation

To run the bot you have to do the following steps.

### Create API-Tokens

Please refer to the official docs of the Tools to retrieve the token:

- [Discord](https://discord.com/developers/docs/getting-started)
- [OpenAI](https://platform.openai.com/docs/api-reference/introduction)

### `.env` File

Create a `.env` file in root with the following structure:

```env
DISCORD_TOKEN = <Your Discord Bot Key>
OPENAI_API_KEY = <Your_Openai_Key>
```

### run

First of all run:

```node
npm i
```

After completion start the bot with:

```node
npm start
```

Have fun!

## Usage

To use the Bot add it to your server like described in the Discord-Docs. After that type `/ai` to trigger the command. Write your `promt` after it and hit `enter`.
The Bot should now calculate your response.
