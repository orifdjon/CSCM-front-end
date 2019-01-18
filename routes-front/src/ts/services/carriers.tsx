import client from "./client";

export interface ICarriersResp {
    id: number,
    "name": string,
    "descx": string,
    "instId": number,
    "instDescx": object,
    "depotId": number,
    "depotDescx": object

}

export function get() {
    return client.get(`/carriers`)
}