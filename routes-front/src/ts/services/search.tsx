import client from "./client";
import {AxiosPromise} from "axios";

export interface ISearchResp {
    n: number,
    region: number,
    fdate: string,
    changed: boolean,
    points: number,
    length: number,
    time: string,
    cost: number,
    costCurr: string,
    status: string,
    resultFlag: number,
    editable: boolean,
    approveable: boolean
}

export type getSearchType = (dateStart: string, carrier?: number, maxPoints?: number,
                      maxCars?: number, newDate?: string, optType?: number, optAlg?: number)
                      => (AxiosPromise<ISearchResp[]>);

export function get(dateStart: string,
                    carrier: number,
                    maxPoints: number,
                    maxCars: number,
                    newDate: string,
                    optType: number,
                    optAlg: number): AxiosPromise<ISearchResp[]> {
    return client.get(`/routes?
        dateStart=${dateStart}
        &
        region=${carrier}
        &
        maxPoints=${maxPoints}
        &
        maxCars=${maxCars}
        &
        newDate=${newDate}
        &
        optType=${optType}
        &
        optAlg=${optAlg}
        `
    )
}