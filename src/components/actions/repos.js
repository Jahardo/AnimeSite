import axios from "axios";
import {addToAnimeList, setAnime, setAnimeList, setIsFatching} from "../../reducers/responceReducer";
import {addToCharapters, setCharapters, setPageCount, setToCharapters} from "../../reducers/charaptersReducer";


export const getAnimeList = (page,) => {
    return async (dispatch) => {
        const offset = (page-1)*20
        console.log(offset)
        try {
            dispatch(setIsFatching(true))
            const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`);
            dispatch(setAnimeList(response.data.data))
            dispatch(setIsFatching(false))
        } catch (error) {
            console.error(error);
        }
    }

}

export const addAnimeList = (page=1,) => {
    return async (dispatch) => {
        const offset = (page)*20
        try {
            dispatch(setIsFatching(true))
            const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`);
            dispatch(addToAnimeList(response.data.data))
            dispatch(setIsFatching(false))
        } catch (error) {
            console.error(error);
        }
    }

}

export const getAnime = (id) => {
    return async (dispatch) => {
        dispatch(setIsFatching(true))
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}?include=categories,genres`);

            dispatch(setAnime(response.data))
            dispatch(setIsFatching(false))
        } catch (error) {
            console.error(error);
        }
    }

}

export const getCharapters = (id, offset = 0,role="main") => {
    return async (dispatch) => {
        dispatch(setIsFatching(true))
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}/characters?&page[offset]=${offset}&sort=role&page[limit]=20`)
                .then(res => res.data.data.map(async (character) => {
                    if (character.attributes.role === role)
                    return await axios.get(`https://kitsu.io/api/edge/media-characters/${character.id}/character`)
                        .then(res=>res.data.data)
                    })
                )
            Promise.all(response).then((res) =>res.filter(item => item)).then((res)=>{
                dispatch(setCharapters(res))
            })
            dispatch(setIsFatching(false))
        } catch (error) {
            console.error(error);
        }
    }

}

export const setFirstCharapters = (id, offset = 0,role="main") => {
    return async (dispatch) => {
        dispatch(setIsFatching(true))
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}/characters?&page[offset]=${offset}&page[limit]=20`)
                .then(res => res.data.data.map(async (character) => {
                        if (character.attributes.role === role)
                            return await axios.get(`https://kitsu.io/api/edge/media-characters/${character.id}/character`)
                                .then(res=>res.data.data)
                    })
                )
            Promise.all(response).then((res) =>res.filter(item => item)).then((res)=>{
                dispatch(setToCharapters(res))
            })
            dispatch(setIsFatching(false))
        } catch (error) {
            console.error(error);
        }
    }

}

export const addCharapters = (id, offset = 0,role="main") => {
    return async (dispatch) => {
        dispatch(setIsFatching(true))
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}/characters?&page[offset]=${offset}&page[limit]=20`)
                .then(res => res.data.data.map(async (character) => {
                        if (character.attributes.role === role)
                            return await axios.get(`https://kitsu.io/api/edge/media-characters/${character.id}/character`)
                                .then(res=>res.data.data)
                    })
                )
            Promise.all(response).then((res) =>res.filter(item => item)).then((res)=>{
                dispatch(addToCharapters(res))
            })
            dispatch(setIsFatching(false))
        } catch (error) {
            console.error(error);
        }
    }

}