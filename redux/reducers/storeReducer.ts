import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false
}

const storeReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOADING:
            return {...state, loading: false}
    }
    return state
};

export default storeReducer