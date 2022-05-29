import {rest} from "msw";
import { UnitProps } from "../models/app.model";
import { config } from "../services/config";
import { getJsonResponse } from "../services/fakeResponse";

const url = config.WEATHER_FORCAST_URL;

export const handlers = [
    rest.get(url, async (req, res, ctx)=> {
        const city = req.url.searchParams.get('q');
        const unit = req.url.searchParams.get('units');
        const fakeResponse = await getJsonResponse(city, unit as UnitProps);

        return res(
            ctx.status(200),
            ctx.json({...fakeResponse})
        )
    })
];