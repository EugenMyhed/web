import actionTypes from '../actions/galleryActionType';


const initialState = {
    searchValue: '',
    sex: '',
    filteredGallery: [],
    login: ''
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
                login: action.login
            }
        default:
            return state;
    }
}       