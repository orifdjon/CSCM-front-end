export type carrierNodes = {
    id: number,
    carrier: string
}[];

export interface CarrierState {
    selectedCarrier: string;
    carrierNodes: carrierNodes;
}


const initialState: CarrierState = {
    selectedCarrier: "None",
    carrierNodes: [
        {
            id: 43,
            carrier: "Internal"
        },
        {
            id: 45,
            carrier: "Internal2"
        },
        {
            id: 50,
            carrier: "Vasya"
        }
    ]
};

const SELECT_CARRIER = "carrier/SELECT_CARRIER";
type SELECT_CARRIER = typeof SELECT_CARRIER;

export interface SelectAction {
    type: SELECT_CARRIER;
    payload: string;
}

type carrierAction = SelectAction; // TODO Можно будет расширить( т.е через " | ")

export default function reducer(state: CarrierState = initialState, action: carrierAction) {
    switch (action.type) {
        case SELECT_CARRIER:
            return {
                ...state,
                selectedCarrier: action.payload
            };
        default:
            return state;

    }
}

export type selectCarrierType = (payload: string) => SelectAction;

export const selectCarrier = (payload: string): SelectAction => ({
    type: SELECT_CARRIER,
    payload
});
