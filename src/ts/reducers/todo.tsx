import IAction from "../actions/IAction";
const initialState = [];

const todo = (state: any = initialState, action:IAction) => {
    if (action == "ADD_TODO") {
        return [
            ...state,
            action.payload
        ];
    }
};
