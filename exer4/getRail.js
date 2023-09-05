import axios from "axios"
import https from "https"

getRealTimeRailCoordinates();

export default async function getRealTimeRailCoordinates() {
    let requestSettings = {
        method: 'get',
        url: 'https://developerservices.itsmarta.com:18096/railrealtimearrivals?apiKey=aa09b111-e99b-4a7c-83f7-8cb6ce8857f7',
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    };
    let res = await axios(requestSettings);
    return res.data.RailArrivals;
}