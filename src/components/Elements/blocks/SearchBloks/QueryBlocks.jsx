import React, {useEffect, useState} from 'react';
import axios from "axios";
import QueryBlock from "./QueryBlock";

const QueryBlocks = (props) => {
    const serialize = (obj) => {
        let str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
    const [searchResult,setSearchResult]= useState([])
    const {query,isChange,setIsChange} = props
    const [offset,setOffset] = useState(0)
    useEffect(()=>{
        axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}&filter[text]=${serialize({query})}`)
            .then(res => {
                setSearchResult(res.data.data)
            })
            .finally(res => {
                setIsChange(false)
            })
    },[isChange])
    return (
        <div>
            <div className="overflow-x-hidden overflow-y-auto  w-[480px] h-[400px] ">
                {searchResult.map(anime =>
                    <div><QueryBlock anime={anime}/></div>
                )}
            </div>
        </div>
    );
};

export default QueryBlocks;