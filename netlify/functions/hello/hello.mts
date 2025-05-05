


import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {

  console.log('hola mundo desde hello');

  return new Response(JSON.stringify({
    message: 'hola mundo'
  }), {
    status: 200,
    headers: {'Content-Type': 'application/json'}
  });
};

// TODO: pendiente, porque cambio la forma de hacer las edge functions

// https://jmfr-functions.netlify.app/.netlify/functions/github-discord

// export const config: Config = {
//   path: "/api/greeting"
// };