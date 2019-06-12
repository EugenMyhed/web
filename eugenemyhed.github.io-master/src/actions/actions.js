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

export const logined = () => ({
    type: actionTypes.LOGINED,
})

export const logOut = () => ({
    type: actionTypes.LOGOUT,
})

export const addAdmin = () => ({
    type: actionTypes.IS_ADMIN,
})

export const getUser = userData  => ({
    type: actionTypes.GET_USER_DATA,
    userData,
})

export const getPosts = postData  => ({
    type: actionTypes.GET_POST_DATA,
    postData,
})

