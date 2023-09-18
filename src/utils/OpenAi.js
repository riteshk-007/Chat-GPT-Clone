export const sendMsgToAI = async (msg) => {
  const API_URL = "https://api.openai.com/v1/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_GPT_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: msg,
      temperature: 0.2,
      max_tokens: 2048,
      n: 1,
      stop: null,
    }),
  };
  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    return response?.choices[0]?.text;
  } catch (error) {
    console.log(error);
  }
};
