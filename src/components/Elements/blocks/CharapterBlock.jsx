import React, {useEffect} from 'react';
import axios from "axios";

const CharapterBlock = (props) => {
    const {persona} = props
    return (
        <div className="pl-3 w-24">
            <img className="h-36 w-24 object-cover" src={persona?.attributes?.image?.original}/>
            <div className="mt-1 text-lynch-500">{persona?.attributes.names?.en}</div>
        </div>
    );
};

export default CharapterBlock;