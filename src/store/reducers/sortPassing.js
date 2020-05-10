import * as actionTypes from '../actions'

const initialState = {
    sortValue:0
}

const sortPassingReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_SORT:
            return {
                ...state,
                sortValue:action.sortValue
            }
        default:
            return state
    }
}

export default sortPassingReducer