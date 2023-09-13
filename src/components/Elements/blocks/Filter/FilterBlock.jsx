import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import TimeLineBlock from "./TimeLineBlock";
import CategoriesAGenres from "./CategoriesAGenres";

const FilterBlock = () => {
    const dispatch = useDispatch()
    const [genres, setGenres] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/categories")
            .then(res => {
                setCategories(res.data.data)
            })
    }, [])
    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/genres")
            .then(res => {
                setGenres(res.data.data)
            })
    }, [])

    return (<div
        className="lg:bg-gradient-to-r from-shark-400/20 from-10% via-lynch-600 to-shark-400/20 to-90% rounded-xl border-transparent border-2 w-full">
        <div className="m-2 rounded-xl border-transparent bg-ebony-950/50">
            <div className="text-athens-gray-600 ">
                <div className="px-3">
                    <h3 className="hover:text-white">time</h3>
                    <TimeLineBlock/>
                </div>
                <CategoriesAGenres genres={genres} categories={categories} setGenres={setGenres} setCategories={setCategories} />
            </div>
        </div>
    </div>);
};

export default FilterBlock;