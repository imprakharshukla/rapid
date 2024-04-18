import { initServer } from "@ts-rest/express";
import Container from "typedi";
import { Logger } from "winston";
import { z } from "zod";

import { superContract } from "@repo/contract";

import TextService from "../../services/text"

export default (server: ReturnType<typeof initServer>) => {
    const logger: Logger = Container.get("logger");
    const helloServiceInstance: TextService = Container.get(TextService);

    return server.router(superContract.text, {
        getText: {
            handler: async ({ body }) => {
                try {
                    const text = helloServiceInstance.generateText(
                        {
                            name: body.name
                        }
                    );
                    return {
                        status: 200,
                        body: {
                            response: text,
                        },
                    };
                } catch (e) {
                    logger.error(e);
                    return {
                        status: 500,
                        body: {
                            response: "Internal Server Error",
                        },
                    };
                }
            },
        },
    });
};
