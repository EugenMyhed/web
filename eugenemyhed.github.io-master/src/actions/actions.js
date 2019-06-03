import actionTypes from './galleryActionType';

export function getSex(sex){
    return{
        type: actionTypes.GET_SELECTED_SEX,
        sex,   
    }
}

export function getSearchFieldValue(searchValue){
    return{
        type: actionTypes.GET_SEARCH_FIELD_VALUE,
        searchValue,   
    }
}

export const logIn = login => ({
    tupe: actionTypes.LOGIN,
    login,
})

