import * as actions from "../const/const";

export const dataLoaded = (newData) => {
    return {
        type: actions.DATA_LOADED,
        payload: newData
    }
}

export const categoriesLoaded = (newCategories) => {
    return {
        type: actions.CATEGORIES_LOADED,
        payload: newCategories
    }
}

export const detailsLoaded = (newDetails) => {
    return {
        type: actions.DETAILS_LOADED,
        payload: newDetails
    }
}