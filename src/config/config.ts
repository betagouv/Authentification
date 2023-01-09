import assert from "assert";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const appUrl: string = process.env.APP_URL
  ? process.env.APP_URL.replace(/\/+$/, "")
  : `http://localhost:${port}`;
const sessionSecret: string = process.env.SESSION_SECRET || "dev";

assert(process.env.PROVIDER_URL, "Missing PROVIDER_URL env var");
assert(process.env.CLIENT_SECRET, "Missing CLIENT_SECRET env var");
assert(process.env.CLIENT_ID, "Missing CLIENT_ID env var");
assert(process.env.SESSION_SECRET, "Missing SESSION_SECRET env var");
console.log("appUrl : ", appUrl);
export { port, appUrl, sessionSecret };
