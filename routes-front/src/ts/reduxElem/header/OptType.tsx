export type optTypeNodes = {
    id: number,
    optType: string
}[];

export interface OptTypeState {
    selectedOptType: string;
    optTypeNodes: optTypeNodes;
}


const initialState: OptTypeState = {
    selectedOptType: "None",
    optTypeNodes: [
        {
            id: 1,
            optType: "Cost optimization"
        },
        {
            id: 2,
            optType: "Elapsed time optimization"
        },
        {
            id: 3,
            optType: "Complex optimization"
        }
    ]
};

const SELECT_OPT_TYPE = "optType/SELECT_OPT_TYPE";
type SELECT_OPT_TYPE = typeof SELECT_OPT_TYPE;

export interface SelectAction {
    type: SELECT_OPT_TYPE;
    payload: string;
}

type optTypeAction = SelectAction; // TODO Можно будет расширить( т.е через " | ")

export default function reducer(state: OptTypeState = initialState, action: optTypeAction) {
    switch (action.type) {
        case SELECT_OPT_TYPE:
            return {
                ...state,
                selectedOptType: action.payload
            };
        default:
            return state;

    }
}

export type selectOptTypeType = (payload: string) => SelectAction;

export const selectOptType = (payload: string): SelectAction => ({
    type: SELECT_OPT_TYPE,
    payload
});
