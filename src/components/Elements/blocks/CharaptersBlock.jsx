import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAnime, getCharapters} from "../../actions/repos";

import InformationPanel from "./InformatinPanel";
import CharapterBlock from "./CharapterBlock";

const CharaptersBlock = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {charaptersMain} = useSelector(state => state.charapters)
    useEffect(() => {
        dispatch(getCharapters(id,))
    }, [id])
    return (
        <div>
            <div onClick={()=>{navigate("/anime/"+id+"/characters")}}>
                <InformationPanel text={"Main Charapters"} width={"72"}/>
            </div>
            <div>
               <div className="pt-5 flex flex-wrap ">
                   {charaptersMain?.map(persona =>
                       <CharapterBlock persona={persona} />
                   )}
               </div>
            </div>
        </div>
    );
};

export default CharaptersBlock;