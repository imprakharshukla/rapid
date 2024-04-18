import { cleanEnv, email, json, str } from "envalid";

export const env = cleanEnv(process.env, {
  // Here we can define the environment variables that our app needs
  // INSTAGRAM_TOKEN: str(),

});

export default env;
