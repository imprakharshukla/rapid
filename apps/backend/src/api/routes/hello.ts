import { initServer } from "@ts-rest/express";
import Container from "typedi";
import { Logger } from "winston";
import { z } from "zod";

import { superContract } from "@repo/contract";

import HelloService from "../../services/hello"

export default (server: ReturnType<typeof initServer>) => {
    const logger: Logger = Container.get("logger");
    const helloServiceInstance: HelloService = Container.get(HelloService);

    return server.router(superContract.hello, {
        getHello: {
            handler: async () => {
                try {
                    const hello = helloServiceInstance.generateHello();
                    return {
                        status: 200,
                        body: {
                            response: hello,
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
