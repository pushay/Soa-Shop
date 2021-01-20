import * as actionTypes from '../actions'

const initialState = {
    sortValue:0,
    filter:'',
    setFilter:'',
    sortQuality:0
}

const sortPassingReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_SORT:
            return {
                ...state,
                sortValue:action.sortValue
            }
        case actionTypes.STORE_SORT_QUALITY:
            return {
                ...state,
                sortQuality:action.sortQuality
            }
        case actionTypes.STORE_FILTERS:
            return {
                ...state,
                filter : action.filters,
                setFilter : action.setFilters
            }
        default:
            return state
    }
}

export default sortPassingReducer