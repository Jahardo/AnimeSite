import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAnime} from "../actions/repos";
import InformatinPanel from "../Elements/blocks/InformatinPanel";
import InformationBlock from "../Elements/blocks/InformationBlock";
import {classNames} from "../../utils/classNames";
import YouTubeBlock from "../Elements/blocks/YouTubeBlock";
import TitlesBlock from "../Elements/blocks/TitlesBlock";
import CharaptersBlock from "../Elements/blocks/CharaptersBlock";
import Loader from "../Elements/Loader";
import {setToCharapters} from "../../reducers/charaptersReducer";


const AnimePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const {anime} = useSelector(state => state.responce)
    useEffect(() => {
        dispatch(getAnime(id))
        dispatch(setToCharapters([]))
    }, [id])

    return (<div className="">
        <Loader/>
        <div className="">
            <div
                className="w-full h-1/5 lg:h-3/6   absolute  z-10 bg-gradient-to-b from-black/10 to-black/80"></div>
            <img className="w-full h-1/5 lg:h-3/6  absolute  z-0 opacity-60"
                 src={anime.data?.attributes?.coverImage?.large || "https://images3.alphacoders.com/132/1320422.png"}/>
        </div>
        <div className="lg:flex w-full pt-20 lg:pl-20 relative flex-wrap">
            <div className="z-20 relative w-1/5">
                <img height={402} width={284} className="absolute z-20 relative"
                     src={anime.data?.attributes?.posterImage?.small}/>
            </div>
            <div className="mt-2  lg:w-3/4 pl-3 lg:pl-10">
                <TitlesBlock anime={anime}/>
                <div>
                    <div className={"text-lynch-500 "}>
                        <div className="">{anime.data?.attributes?.synopsis}</div>
                    </div>
                </div>
            </div>
            <div className="mt-2 pl-3 w-full lg:flex">
                <div className="">
                    <InformatinPanel text={"information"} width={"64"}/>
                    <InformationBlock attributes={anime.data?.attributes}/>
                </div>
                <div className="mt-3 lg:pl-10 w-full"><CharaptersBlock/></div>
            </div>
        </div>
        <div className="">
            {anime?.attributes?.youtubeVideoId ? <YouTubeBlock video={anime?.attributes?.youtubeVideoId}/> :
                <div></div>}
        </div>
    </div>);
};

export default AnimePage;