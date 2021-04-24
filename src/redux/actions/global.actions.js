import { globalActionTypes } from './action-types'

export const showLoader = (loaderMessage) => {
    return {
        type: globalActionTypes.SHOW_LOADER,
        payload: loaderMessage
    }
}

export const hideLoader = () => {
    return {
        type: globalActionTypes.HIDE_LOADER
    }
}

export const updateSelectedPage = (loaderMessage) => {
    return {
        type: globalActionTypes.UPDATE_SELECTED_PAGE,
        payload: loaderMessage
    }
}