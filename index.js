import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/biscoito", async (req, res) => {
  const resposta = await client.responses.create({
    model: "gpt-4.1-mini",
    input: "Crie uma mensagem curta e positiva estilo biscoito da sorte."
  });

  res.json({
    mensagem: resposta.output[0].content[0].text
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
