const SET_ANIME_LIST = "SET_ANIME_LIST"
const SET_ANIME = "SET_ANIME"
const SET_ISFATCHING = "SET_ISFATCHING"
const ADD_ANIME_LIST = "ADD_ANIME_LIST"
const SET_ISOPEN = "SET_ISOPEN"

const defaultState = {
    items: [] ,
    isFatching: false,
    anime:[],
    isOpen : false
}


export default function (state = defaultState,action){
    switch (action.type) {
        case SET_ANIME_LIST :
            return {
                ...state,
                items: action.payload
            }
        case SET_ANIME:
            return {
                ...state,
                anime: action.payload
            }
        case SET_ISFATCHING:
            return {
                ...state,
                isFatching: action.payload
            }
        case ADD_ANIME_LIST:
            return {
                ...state,
                items: [...state.items,...action.payload]
            }
        case SET_ISOPEN:
            return {
                ...state,
                isOpen: action.payload
            }
        default :
            return state

    }
}

export const setAnimeList = (responce) => ({
    type:SET_ANIME_LIST ,payload:responce,
})
export const setAnime = (responce) => ({
    type:SET_ANIME ,payload:responce,
})
export const setIsFatching = (responce) => ({
    type:SET_ISFATCHING ,payload:responce,
})
export const addToAnimeList =(responce) => ({
    type:ADD_ANIME_LIST, payload:responce
})

export const setIsOpen =(responce) => ({
    type:SET_ISOPEN, payload:responce
})


