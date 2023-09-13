import React from 'react';
import {useNavigate} from "react-router-dom";
const AnimeBlockComponent = (props) => {
    const anime = props.anime
    const navigate = useNavigate()
    return (
        <div className="">
                <div className="pl-2 pt-1 width" onClick={()=>{navigate("/anime/"+anime.id)}}>
                    <div className="">
                        <div className="ml-2 mt-2  font-bold text-1xl z-10 absolute bg-amber-400  rounded-lg w-20  flex justify-center">
                            <div className="flex items-center ">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <div>{anime.attributes.averageRating}</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="relative z-0" ><img className=" left-0 top-0 z-0 object-cover" height={251} width={180} src={anime.attributes.posterImage.small}/></div>
                    </div>
                    <h3 className="text-1xl text-blue-700  ">{anime.attributes.slug}  {anime.id}</h3>
                </div>
        </div>
    );
};

export default AnimeBlockComponent;