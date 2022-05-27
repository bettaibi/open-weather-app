import {rest} from "msw";
import { config } from "../services/config";
import { fakeResponse } from "../services/fakeResponse";

const url = config.WEATHER_FORCAST_URL;

export const handlers = [
    rest.get(url, (req, res, ctx)=> {
        return res(
            ctx.status(200),
            ctx.json(fakeResponse)
        )
    })
];