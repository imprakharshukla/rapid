import { generateOpenApi } from "@ts-rest/open-api";
import { superContract } from "@repo/contract";

export const openApiDocument = generateOpenApi(superContract, {
  info: {
    title: "Gramflow API",
    version: "1.0.0",
  },
});
