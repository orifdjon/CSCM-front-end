import * as carriers from "../../services/carriers"
import {AsyncAction, AsyncState} from "../Async";
import {Error, GetAction} from "./Search";
import * as search from "../../services/search";
import {Dispatch} from "redux";
import {IStore} from "../../store";

export type carrierNodes = {
    id: number,
    carrier: string
}[];

export interface CarrierState {
    selectedCarrier: string;
    get: AsyncState<carriers.ICarriersResp[]>
}

const initialState: CarrierState | CarrierState = {
    selectedCarrier: "None",
    get: {
        isFetching: false,
        error: null,
        data: []
    }
};

const SELECT_CARRIER = "carrier/SELECT_CARRIER";
type SELECT_CARRIER = typeof SELECT_CARRIER;

const GET_CARRIER = "carrier/GET_CARRIER";
type GET_CARRIER = typeof GET_CARRIER;

export interface SelectAction {
    type: SELECT_CARRIER;
    payload: string;
}

export interface GetCarriersAction extends AsyncAction<carriers.ICarriersResp[]> {
    type: GET_CARRIER;
}

type carrierAction = SelectAction | GetCarriersAction; // TODO Можно будет расширить( т.е через " | ")

export default function reducer(state: CarrierState = initialState, action: carrierAction) {
    switch (action.type) {
        case SELECT_CARRIER:
            return {
                ...state,
                selectedCarrier: action.payload
            };
        case GET_CARRIER:
            if (!action.status) {
                return {
                    ...state,
                    get: {
                        ...state.get,
                        isFetching: true,
                        error: null
                    }
                }
            }
            if (action.status === "error") {
                return {
                    ...state,
                    get: {
                        isFetching: false,
                        error: action.payload,
                        data: null,
                    }
                }
            }
            if (action.status === "success") {
                return {
                    ...state,
                    get: {
                        isFetching: false,
                        error: null,
                        data: action.payload
                    }
                }
            }
            console.log("status is not correct");
            break;
        default:
            return state;

    }
}

export type selectCarrierType = (payload: string) => SelectAction;

export const selectCarrier = (payload: string): SelectAction => ({
    type: SELECT_CARRIER,
    payload
});

export const getCarrierActionCreator = (status?: 'error' | 'success',
                                        payload?: carriers.ICarriersResp | Error): GetCarriersAction =>
    ({
        type: GET_CARRIER,
        status,
        payload
    });

export function getCarrier() {
    return async (dispatch: Dispatch, getState: () => IStore) => {
        dispatch(getCarrierActionCreator());
        try {
            const resp = await carriers.get();
            dispatch(getCarrierActionCreator("success", resp.data));
        }
        catch (e) {
            dispatch(getCarrierActionCreator("error", e));
            throw new Error(e);
        }
    }
}