import React from 'react';

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./Elements/Main";
import "../style.css"
import NavBar from "./Elements/NavBar";
import AnimePage from "./Anime/AnimePage";
import Loader from "./Elements/Loader";
import {useSelector} from "react-redux";
import CharactersPage from "./Anime/CharactersPage";
const App = () => {
    const {isFatching} = useSelector(state => state.responce)
    return (
        <div>

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/anime/:id" element={<AnimePage/>}/>
                <Route path="/anime/:id/characters" element={<CharactersPage/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;