export interface DateTimeState {
    date: string
}

const initialDate: DateTimeState = {
    date: "None"
};

const SET_DATE = "date/SET_DATE";
type SET_DATE = typeof SET_DATE;

export interface SetDateAction {
    type: SET_DATE
    payload: string;
}

type dateAction = SetDateAction; // TODO Можно будет расширить( т.е через " | ")

export default function reducer(state: DateTimeState = initialDate, action: dateAction) {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: action.payload
            };
        default:
            return state;

    }
}

export type setDateType = (payload: string) => SetDateAction;

export const dateFormat: string = "DD-MM-YYYY";

export const setDate = (payload: string): SetDateAction => ({
    type: SET_DATE,
    payload
});