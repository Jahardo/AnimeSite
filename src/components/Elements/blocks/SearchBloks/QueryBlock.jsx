import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setIsOpen} from "../../../../reducers/responceReducer";

const QueryBlock = (props) => {
    const {anime,} = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div>
            <div className="hover:bg-gray-100/10 lg:pl-3 pt-2 flex" onClick={()=>{navigate("/anime/"+anime?.id); dispatch(setIsOpen(false))}}>
                <div className="flex relative w-2/7">
                    <div className="relative z-0" >
                        <img className=" left-0 top-0 z-0" height={180} width={120} src={anime?.attributes?.posterImage?.tiny}/>
                    </div>
                    <div className="lg:ml-2 lg:mt-2  font-bold lg:text-1xl z-10 absolute bg-amber-400  rounded-lg lg:w-18  flex justify-center">
                        <div className="flex items-center ">
                            <svg className="w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <div>{anime?.attributes?.averageRating}</div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <h3 className="pl-2 lg:pl-4 lg:text-1xl text-blue-700">{anime?.attributes?.titles?.en}</h3>
                </div>
            </div>
        </div>
    );
};

export default QueryBlock;