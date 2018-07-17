import * as search from "../../services/search";
import {Moment} from "moment";
import {Dispatch} from "redux";
import {IStore} from "../../store/index";

// Упрощаем интерфейс серверной ошибки
export type Error = any;

// Типовой интерфейс для хранения состояния любого http запроса
interface AsyncState<D> {
    isFetching: boolean;
    error: Error;
    data: D;
}

// Для уменьшения количества действий, определяем их состояние по статусам
interface AsyncAction<P> {
    status?: 'error' | 'success';
    payload?: P | Error;
}

export interface SearchState {
    get: AsyncState<search.ISearchResp[]>
}

const initialState: SearchState = {
    get: {
        isFetching: false,
        error: null,
        data: []
    }
};

const GET_SEARCH = "search/GET";
type GET_SEARCH = typeof GET_SEARCH;

export interface GetAction extends AsyncAction<search.ISearchResp[]>{
    type: GET_SEARCH;
}

type SearchAction = GetAction;

export default function reducer(state: SearchState = initialState, action: SearchAction): SearchState {
    switch (action.type) {
        case GET_SEARCH:
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

export const getActionCreator = (status?: 'error' | 'success', payload?: search.ISearchResp | Error): GetAction => ({
    type: GET_SEARCH,
    status,
    payload
});

export function get(dateStart: string,
                    carrier: number = 43,
                    maxPoints: number = 30,
                    maxCars: number = 6,
                    newDate: string = "2000-00-01",
                    optType: number = 1,
                    optAlg: number = 1 ) {

    return async (dispatch: Dispatch, getState: () => IStore) => {
        dispatch(getActionCreator());

        try {
            const response = await search.getSearch(dateStart, carrier, maxPoints, maxCars, newDate, optType, optAlg);
            dispatch(getActionCreator('success', response.data))
        }
        catch (e) {
            dispatch(getActionCreator('error', e));
            throw new Error(e);
        }
    }
}
