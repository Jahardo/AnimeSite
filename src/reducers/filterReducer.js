const SET_GENRES = "SET_GENRES"
const SET_CATEGORIES  = "SET_CATEGORIES"

const defaultState = {
    categoriesPicked: [],
    genresPicked: [],

}


export default function (state = defaultState,action){
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categoriesPicked: action.payload
            }
        case SET_GENRES:
            return {
                ...state,
                genresPicked: action.payload
            }
        default :
            return state

    }
}

export const  setCheckedCategories  = (responce) => ({
    type: SET_CATEGORIES , payload:responce
})

export const  setCheckedGenres  = (responce) => ({
    type: SET_GENRES , payload:responce
})