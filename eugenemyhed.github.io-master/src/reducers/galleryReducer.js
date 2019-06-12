import actionTypes from '../actions/galleryActionType';


const initialState = {
    searchValue: '',
    sex: '',
    filteredGallery: [],
    userData: [],
    postData: [],
    logined: false,
    isAdmin: false,
}

export default function galleryReducer (state = initialState, action){
    switch(action.type){
        case actionTypes.GET_SEARCH_FIELD_VALUE: 
            return{
                ...state, 
                searchValue: action.searchValue
            }
        case actionTypes.GET_SELECTED_SEX: 
            return{
                ...state, 
                sex: action.sex
            }
        case actionTypes.LOGIN: 
            return{
                ...state, 
                loginFormData: action.loginFormData
            }
        case actionTypes.GET_USER_DATA: 
            return{
                ...state, 
                userData: action.userData
            }
        case actionTypes.GET_POST_DATA: 
            return{
                ...state, 
                postData: action.postData
            }
        case actionTypes.LOGINED: 
            return{
                ...state, 
                logined: true
            }
        case actionTypes.LOGOUT: 
            return{
                ...state, 
                logined: false
            }
        case actionTypes.IS_ADMIN: 
            return{
                ...state, 
                isAdmin: true
            }
        default:
            return state;
    }
}       