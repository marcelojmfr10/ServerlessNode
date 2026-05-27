import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportantVariable) {
    throw new Error("missing variable");
  }

  console.log("hola mundo desde variables");

  return new Response(
    JSON.stringify({
      myImportantVariable,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
