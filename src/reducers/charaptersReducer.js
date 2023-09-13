const ADD_TOCHARAPTERS = "ADD_TOCHARAPTERS"
const SET_CHARAPTERS = "SET_CHARAPTERS"
const SET_TOCHARAPTERS = "SET_TOCHARAPTERS"
const SET_PAGE_COUNT = "SET_PAGE_COUNT"
const defaultState = {
    charapters: [],
    charaptersMain: [],
    pageCount : 999
}


export default function (state = defaultState,action){
    switch (action.type) {
        case SET_CHARAPTERS:
            return {
                ...state,
                charaptersMain: action.payload
            }
        case ADD_TOCHARAPTERS:
            return {
                ...state,
                charapters: [...state.charapters,...action.payload]
            }
        case SET_TOCHARAPTERS:
            return {
                ...state,
                charapters: action.payload
            }
        case SET_PAGE_COUNT:
            return {
                ...state,
                pageCount: action.payload
            }

        default :
            return state

    }
}

export const  addToCharapters = (responce) => ({
    type: ADD_TOCHARAPTERS , payload:responce
})
export const  setToCharapters = (responce) => ({
    type: SET_TOCHARAPTERS , payload:responce
})
export const setCharapters = (responce) => ({
    type:SET_CHARAPTERS ,payload:responce,
})

export const setPageCount = (responce) => ({
    type: SET_PAGE_COUNT , payload:responce,
})