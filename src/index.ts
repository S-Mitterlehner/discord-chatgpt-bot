import { Client, GatewayIntentBits } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { askChatGpt } from './commands/chatgpt.command';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const startBot = () => {
  const command = new SlashCommandBuilder()
    .setName('ai')
    .setDescription('Ask ChatGPT something')
    .addStringOption((o) => o.setName('prompt').setDescription('The prompt to ask ChatGPT').setRequired(true));

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once('ready', async () => {
    await client.application?.commands.set([command]);
    console.log('Ready!');
  });

  client.on('interactionCreate', async (i) => askChatGpt(i));

  client.login(process.env.DISCORD_TOKEN);
};

startBot();
