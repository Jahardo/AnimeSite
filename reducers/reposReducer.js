const SET_ANIME_LIST = "SET_ANIME_LIST"

const defaultState = {
    items:[],
    isFetching: true,

}

export default function responseReducer(state=defaultState,action) {
    switch (action.type){
        case SET_ANIME_LIST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export const setAnimeList = (response) =>({
    type:SET_ANIME_LIST,payload:response,
})
