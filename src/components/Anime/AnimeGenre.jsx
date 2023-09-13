import React from 'react';

const AnimeGenre = (props) => {
    const {type} = props
    if (type.type === "genres") {
        return (
            <div
                className="m-2 truncate hover:text-clip  lb:w-24 lg:h-8 w-18 h-7  relative border-1 rounded-sm border-white z-20  border-2  hover:bg-white hover:border-none text-white hover:text-black/90 hover:font-bold">
                <div className="text-center  ">
                    {type.attributes?.slug}
                </div>
            </div>
        )
    }
    else {
        return (
            <div
                className="m-2 text-xs text-center h-4  relative rounded-sm bg-gray-700/80 z-20 hover:bg-white/80 hover:border-none text-white hover:text-gray-700/80 hover:font-bold">
                <div className="">
                    {type.attributes?.slug}
                </div>
            </div>
        )
    }
};

export default AnimeGenre;