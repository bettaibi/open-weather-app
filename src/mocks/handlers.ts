import {rest} from "msw";
import { config } from "../services/config";
import { getJsonResponse } from "../services/fakeResponse";

const url = config.WEATHER_FORCAST_URL;

export const handlers = [
    rest.get(url, async (req, res, ctx)=> {
        const city = req.url.searchParams.get('q');
        const fakeResponse = await getJsonResponse(city)

        return res(
            ctx.status(200),
            ctx.json(fakeResponse)
        )
    })
];