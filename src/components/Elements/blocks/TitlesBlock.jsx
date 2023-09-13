import React, {useState} from 'react';
import AnimeGenre from "../../Anime/AnimeGenre";


const TitlesBlock = (props) => {
    const [isOpen, setIsOpen] = useState()
    const {anime} = props
    return (
        <div className="lg:h-72">
            <div className="flex justify-center ">
                <h2 className=" text-xl lg:text-4xl text-white  z-20 relative ">{anime.data?.attributes?.canonicalTitle || anime.attributes?.titles?.en}</h2>
                <div className="relative z-30 ">
                    <div className="flex items-center ">
                        <svg className="w-5 h-5 svgComponent" aria-hidden="true" fill="none"
                             stroke="currentColor"
                             stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <div className="text-yellow-400 font-bold">{anime.data?.attributes?.averageRating}</div>
                    </div>
                </div>
            </div>
                <div className="text-1xl font-bold text-white/80 z-20 relative  ">
                    {isOpen ? <div>
                        <h3>{anime.data?.attributes?.titles?.en_jp}</h3>
                        <h3>{anime.data?.attributes?.titles?.ja_jp}</h3>
                        <h3>{anime.data?.attributes?.titles?.en}</h3>
                        <h3>{anime.data?.attributes?.titles?.en_us}</h3>
                    </div> : <div><h3>{anime.data?.attributes?.titles?.en_jp}</h3></div>}
                    <div onClick={() => {
                        setIsOpen(prevState => !prevState)

                    }} className="w-8 h-8 border-2 border-transparent hover:border-white">
                        <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            <div className="z-20 flex flex-wrap">
                {anime.included?.map((type => <AnimeGenre type={type}/>))}
            </div>
        </div>
    );
};

export default TitlesBlock;