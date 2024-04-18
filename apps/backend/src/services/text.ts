import { addMinutes } from "date-fns";
import { Inject, Service } from "typedi";
import { Logger } from "winston";
import { z } from "zod";
@Service()
export default class TextService {
    constructor(@Inject("logger") private logger: Logger) { }

    public generateText({
        name
    }: {
        name: string
    }) {
        return `Welcome, ${name}`
    }
}
