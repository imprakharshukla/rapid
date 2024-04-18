import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const textContract = c.router({
    getText: {
        method: "POST",
        path: "/text",
        body: z.object({
            name: z.string(),
        }),
        responses: {
            200: z.object({
                response: z.string(),
            }),
            500: z.object({
                response: z.string(),
            }),
        },
        summary: "Echo user",
    },

});
