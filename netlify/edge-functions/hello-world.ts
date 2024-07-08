import type { Context, Config } from "@netlify/edge-functions";

const handler = async (request: Request, context: Context) => {
  return new URL("https://www.google.com/", request.url);
};

export const config: Config = {
  path: "/rewrite",
};

export default handler;