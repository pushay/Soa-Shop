import * as actionTypes from '../actions'

const initialState = {
    list:[]
}

const shopAccessingReducer = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_SHOPPCARD:
            let shoppingList = state.list
            let imageInfo = action.imageIdShop
            if (shoppingList.length === 0) {
                imageInfo.quantity = 1
                shoppingList.push(imageInfo)
            } else {
                let repeated = false;
                shoppingList = shoppingList.map( thing => {
                    if (thing.id === imageInfo.id) {
                        thing.quantity = thing.quantity + 1;
                        repeated = true;
                    }
                    return thing;
                })

                if (!repeated) {
                    imageInfo.quantity = 1
                    shoppingList.push(imageInfo)
                }
            }
            
            return {
                ...state,
                list:shoppingList
            }
        case actionTypes.STORE_STATE:
            return {
                ...state,
                list:action.stateProd
            }
        default: 
            return state
    }
}

export default shopAccessingReducer