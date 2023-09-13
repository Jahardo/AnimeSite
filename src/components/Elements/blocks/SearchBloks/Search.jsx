import React, {useState} from 'react';
import QueryBlocks from "./QueryBlocks";

const Search = () => {
    const [query,setQuery] = useState("")
    const [isChange,setIsChange] = useState(false)
    return (
        <div className="p-4">
            <div className="flex border-2 border-transparent hover:border-blue-800 flex w-full text-white">
                <input
                    onChange={(event)=>{setQuery(event.target.value) ; setIsChange(true)}}
                    type="text"
                    placeholder="Search for ?"
                    className="w-full h-9 p-2 text-justify text-white border-gray-800 bg-gray-800 outline outline-transparent"/>
                <div className="h-9 pt-1  text-white border-gray-900 bg-gray-900">
                    <svg className="pt-1 pl-1 h-[22px] w-[22px]" aria-hidden="true" fill="none"
                         stroke="white" strokeWidth="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                              strokeLinecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div>
                {query
                    ?
                    <QueryBlocks query={query} isChange={isChange} setIsChange={setIsChange}/>
                    :
                    <div></div>
                }
            </div>
        </div>
    );
};

export default Search;