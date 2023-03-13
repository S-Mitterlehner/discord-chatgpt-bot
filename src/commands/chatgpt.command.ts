import { OpenAIApi, Configuration } from 'openai';

async function ask(prompt: string) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);

  const result = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
  });

  return result.data.choices[0].text;
}

export async function askChatGpt(interaction: any) {
  if (!interaction.isCommand()) return;

  const prompt = interaction.options.data[0].value;
  if (!prompt) {
    interaction.reply('Please provide a prompt');
    return;
  }

  interaction.deferReply();

  const result = await ask(prompt.toString());
  console.log(result);

  interaction.editReply(result!);
}
