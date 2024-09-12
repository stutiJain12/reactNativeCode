import {HOLD_RX_DATA} from './action'

const initialState = {
    rxData: []
};

const rxReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HOLD_RX_DATA:
            let newState = {
                ...state,
                // rxData: [ ...state, ...action ]
                rxData: state.rxData.map((post: any) => post.key === action.key ? // Loop through the array to find the post you want to modify
                    { ...post, status: action.status} : post // Copy the post state and then modify it. Else return the same object.
                )
            };
            return newState;
        default:
            return state
    }
};

export default rxReducer