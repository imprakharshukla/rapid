import { addMinutes } from "date-fns";
import { Inject, Service } from "typedi";
import { Logger } from "winston";
import { z } from "zod";
@Service()
export default class HelloService {
    constructor(@Inject("logger") private logger: Logger) { }

    public generateHello() {
        return `Hello`
    }
}
