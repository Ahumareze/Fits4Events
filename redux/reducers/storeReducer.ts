import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    showAddModal: false
}

const storeReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADDTOCART:
            return {...state, cart: action.value};
        case actionTypes.SHOWADDMODAL:
            return {...state, showAddModal: action.value}
    }
    return state
};

export default storeReducer