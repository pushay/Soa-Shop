import * as actionTypes from '../actions'

const initialState = {
    sortQuality:0
}

const sortPassingQualityReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_SORT_QUALITY:
            return {
                ...state,
                sortQuality:action.sortQuality
            }
        default:
            return state
    }
}

export default sortPassingQualityReducer