import axios from 'axios';
import { URL, URLSearchParams  } from 'url';
import { Params } from './types';


export default async (lat: number,lon: number) => {
    const url = new URL(process.env.IQAIR_API_ENDPOINT as string)
    const params: Params = {lat, lon, key: process.env.IQAIR_API_KEY as string}
    url.search = new URLSearchParams({...params, lat: params.lat.toString(), lon: params.lon.toString()}).toString()

    try {
        const { data } = await axios.get(url.href)
        return data.data.current.pollution
    } catch (error) {
        console.log(error)
    }
}