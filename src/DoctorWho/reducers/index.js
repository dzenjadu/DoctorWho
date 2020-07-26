import * as actions from '../const/const';

const initState = {
    data: {},
    categories : {},
    details: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.DATA_LOADED:
            return {...state, data: action.payload}
        case actions.CATEGORIES_LOADED:
            return {...state, categories: action.payload}
        case actions.DETAILS_LOADED:
            return {...state, details: action.payload}
        default:
            return state
    }
}

export default reducer;