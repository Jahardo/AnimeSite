import React from 'react';

const InformationBlock = (props) => {
    const {attributes} = props
    return (
        <div className="pt-4 pl-3">
            <div className="bg-athens-gray-900 border-gray-700 h-1/3 width1  z-20 relative">
                <div className="pt-1">SubType: {attributes?.subtype}</div>
                {attributes?.episodeCount
                    ?
                    <div className="pt-1">Episodes Count: {attributes?.episodeCount}</div>
                    :
                    <div></div>}
                <div className="pt-1">
                    {
                        attributes?.status === "finished"
                    ?
                        <div className="flex">Status:  <div className="bg-red-200 rounded-sm ml-3" >{attributes?.status}</div></div>
                    :
                            <div className="flex">Status:  <div className="bg-green-200 rounded-sm ml-3 " >{attributes?.status}</div></div>
                    }
                </div>
                <div className="pt-1">{
                    attributes?.ageRating === "R"
                        ?
                        <div className="flex">Rating:  <div className="bg-red-200 rounded-sm ml-3 w-4 text-center" >{attributes?.ageRating} </div> ({attributes?.ageRatingGuide})</div>
                        :
                        <div className="flex">Rating:  <div className="bg-green-200 rounded-sm ml-3" >{attributes?.ageRating}</div>  ({attributes?.ageRatingGuide})</div>
                }</div>
            </div>
        </div>
    );
};

export default InformationBlock;