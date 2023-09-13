import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCharapters, setFirstCharapters,} from "../actions/repos";
import CharaptersBlock from "../Elements/blocks/CharaptersBlock";
import CharapterBlock from "../Elements/blocks/CharapterBlock";
import InformationPanel from "../Elements/blocks/InformatinPanel";
import {setPageCount} from "../../reducers/charaptersReducer";
import Loader from "../Elements/Loader";


const CharactersPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {charapters, pageCount, charaptersMain} = useSelector(state => state.charapters)
    const [offset, setOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 300 && (charapters.length + charaptersMain.length < pageCount))
            setIsLoading(true)
    }
    useEffect(() => {
        dispatch(setFirstCharapters(id, 0, "supporting"))
        if (pageCount - 20 > 0) {
            setOffset(20)
        }
        /*dispatch(setToCharapters([]))*/
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    useEffect(() => {
        isLoading
            ?
            dispatch(addCharapters(id, offset, "supporting"))
                .then(() => {
                    setOffset(prevState => prevState + 20)
                })
                .finally(() => {
                    setIsLoading(false)
                })
            :
            () => {
            }

    }, [id, isLoading])
    return (
        <div>
            <div className="pl-3 pt-3 lg:pt-20 lg:pl-20 "><CharaptersBlock/></div>
            <div className="pt-3 pl-3 lg:pt-20 lg:pl-20">
                <div>
                    <InformationPanel text={"All Characters"} width={"72"}/>
                </div>
                <div>
                    <div className="pt-5 flex flex-wrap ">
                        {charapters?.map(persona =>
                            <CharapterBlock persona={persona}/>
                        )}
                    </div>
                </div>
            </div>
            <Loader/>
        </div>
    );
};

export default CharactersPage;