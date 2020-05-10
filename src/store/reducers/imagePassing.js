import * as actionTypes from '../actions';

const initialState = {
    imageId:0,

}

const imagePassingReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_ID:
        return {
            ...state,
            imageId:action.imageId
        }
        default:
            return state
    }
}

export default imagePassingReducer