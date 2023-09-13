import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import AnimeBlockComponent from "./blocks/AnimeBlockComponent";
import {addAnimeList, getAnimeList} from "../actions/repos";
import Loader from "./Loader";
import FilterBlock from "./blocks/Filter/FilterBlock";

const Main = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const {items, isFatching} = useSelector(state => state.responce)
    const [isLoading,setIsLoading ] = useState(false)

    const  scrollHandler = (e) => {

        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) <200)
        setIsLoading(true)
    }

    useEffect(()=>{
        dispatch(getAnimeList(page))
    },[])

    useEffect(()=>{
        isLoading
            ?
            dispatch(addAnimeList(page))
                .then(()=>{
                    setPage(prevState => prevState+1)
                })
                .finally(()=>{
                    setIsLoading(false)
                })
            :
            ()=>{}
    },[isLoading])

    useEffect(() => {
        document.addEventListener('scroll',scrollHandler)
        return ()=> {
            document.removeEventListener('scroll',scrollHandler)
        }

    }, [])

    return (
        <div>
            <div className="flex justify-start">
                <div className="pt-4 lg:pt-20 pl-16 flex flex-wrap lg:w-5/6 ">
                    {items.map(anime =>
                        <AnimeBlockComponent key={anime.id} anime={anime}/>
                    )}
                </div>
                <div className="hidden lg:block lg:pt-20 w-56 h-96"><FilterBlock/></div>
            </div>
            <Loader/>
        </div>

    );
};

export default Main;