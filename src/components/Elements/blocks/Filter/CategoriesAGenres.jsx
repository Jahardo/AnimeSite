import React, {useEffect, useState} from 'react';
import {setCheckedCategories, setCheckedGenres} from "../../../../reducers/filterReducer";
import {useDispatch, useSelector} from "react-redux";

const CategoriesAGenres = (props) => {
    const dispatch = useDispatch()
    const {genres,setGenres,categories,setCategories} = props
    const [isOpenGenres, setIsOpenGenres] = useState(false)
    const [isOpenCategories, setIsOpenCategories] = useState(false)
    const {categoriesPicked,genresPicked} = useSelector(state => state.filters)
    return (
        <div>
            <div className="relative pl-4 hover:text-white flex"
                 onClick={() => setIsOpenCategories(prevState => !prevState)}>

                <div>Categories</div>
                {isOpenCategories
                    ?
                    <svg className="pt-1 h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    :
                    <svg className="pt-1 h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor"
                         strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                }
            </div>
            {isOpenCategories
                ?
                <div>
                    {categories.map(category =>
                        <div className="block pl-4">
                            <input
                                className="w-4 h-4 rounded bg-gray-700 border-gray-600"
                                type="checkbox"
                                onChange={(event)=>{event.target.checked ? dispatch(setCheckedCategories([...categoriesPicked,category?.id])) : dispatch(setCheckedCategories(categoriesPicked.filter(elem => elem !== category?.id)))}} />
                            <label className="pl-2">{category?.attributes?.slug}</label>
                        </div>
                    )}
                    <div className="pl-4">{categories[categories.length-1]?.id !== categories?.meta?.count
                        ?
                        <div className="flex space-x-1">
                            <div>Prev</div>
                            <div>Next</div>
                        </div>
                        :
                        <div></div>
                    }</div>
                </div> : <div></div>
            }
            <div className="relative pl-4 flex hover:text-white">
                <div onClick={() => setIsOpenGenres(prevState => !prevState)}>Genres</div>
                {isOpenGenres
                    ?
                    <svg className="pt-1 h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    :
                    <svg className="pt-1 h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor"
                         strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                }
            </div>
            {isOpenGenres ?
                <div onClick={(event) => event.stopPropagation()}>
                    {genres.map(genre =>
                        <div className="block pl-4">
                            <input
                                className="w-4 h-4 rounded bg-gray-700 border-gray-600"
                                type="checkbox"
                                onChange={(event)=>{event.target.checked ? dispatch(setCheckedGenres([...genresPicked,genre?.id])) : dispatch(setCheckedGenres(genresPicked.filter(elem => elem !== genre?.id)));}}/>
                            <label className="pl-2">{genre?.attributes?.slug}</label>
                        </div>
                    )}
                <div>
                    <div>Prev</div>
                    <div>Next</div>
                </div>
            </div> : <div></div>}

        </div>
    );
};

export default CategoriesAGenres;