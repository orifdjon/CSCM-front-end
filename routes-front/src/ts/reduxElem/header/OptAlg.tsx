export type optAlgNodes = {
    id: number,
    optAlg: string
}[];

export interface OptAlgState {
    selectedOptAlg: string;
    optAlgNodes: optAlgNodes;
}


const initialState: OptAlgState = {
    selectedOptAlg: "None",
    optAlgNodes: [
        {
            id: 1,
            optAlg: "Genetic"
        },
        {
            id: 2,
            optAlg: "Ants"
        },
        {
            id: 3,
            optAlg: "Pareto"
        },
        {
            id: 4,
            optAlg: "VNS"
        }
    ]
};

const SELECT_OPT_ALG = "optAlg/SELECT_OPT_ALG";
type SELECT_OPT_ALG = typeof SELECT_OPT_ALG;

export interface SelectAction {
    type: SELECT_OPT_ALG;
    payload: string;
}

type optAlgAction = SelectAction; // TODO Можно будет расширить( т.е через " | ")

export default function reducer(state: OptAlgState = initialState, action: optAlgAction) {
    switch (action.type) {
        case SELECT_OPT_ALG:
            return {
                ...state,
                selectedOptAlg: action.payload
            };
        default:
            return state;

    }
}

export type selectOptAlgType = (payload: string) => SelectAction;

export const selectOptAlg = (payload: string): SelectAction => ({
    type: SELECT_OPT_ALG,
    payload
});
