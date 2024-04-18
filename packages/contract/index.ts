import { AppRouter, initContract } from "@ts-rest/core";
import { textContract } from "./text";
import { helloContract } from "./hello";

const c = initContract();

export const superContract = c.router({
  text: textContract,
  hello: helloContract
});

export { type AppRouter };
