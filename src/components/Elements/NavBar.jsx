import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Modal from "./blocks/Modal";
import Search from "./blocks/SearchBloks/Search";
import {useDispatch, useSelector} from "react-redux";
import {setIsOpen} from "../../reducers/responceReducer";
import FilterBlock from "./blocks/Filter/FilterBlock";

const NavBar = () => {
    const navigate = useNavigate()
    const {isOpen} = useSelector(state => state.responce)
    const dispatch = useDispatch();
    const [menu,setMenu] = useState(false)
    return (
        <div className="bg-gray-800 bg-opacity-80  hover:bg-opacity-100 z-20 relative">
            <div className="flex p-2 items-center justify-between ">
                <div onClick={() => {
                    navigate("/")
                }}>
                    <svg className="w-10 h-10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <Modal>
                    {isOpen
                        ?
                        <div onClick={() => {
                            dispatch(setIsOpen(false))
                        }} className="z-30 fixed h-screen w-screen bg-black/50 left-0 top-0">
                            <div onClick={e => e.stopPropagation()}
                                 className="fixed z-40 lg:left-1/3 lg:top-1/4 lg:h-[500px] lg:w-[500px] w-full h-full  bg-black/90">
                                <Search/>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                </Modal>
                <Modal>
                    {menu
                        ?
                        <div onClick={() => {
                            setMenu(false)
                        }} className="z-30 fixed h-screen w-screen bg-black/50 left-0 top-0">
                            <div onClick={e => e.stopPropagation()}
                                 className="fixed z-40 right-0 top-0 h-full w-2/3  bg-gray-800/90">
                               <div className="h-full pt-8">
                                   <div className="pl-8">
                                       <div className="bg-black/50  relative w-36 h-[30px]">
                                           <button onClick={() => {
                                               dispatch( setIsOpen(!isOpen));
                                               setMenu(false)
                                           }}
                                                   className="absolute h-full w-full  left-0 top-0 z-30 rounded-md flex items-center text-center bg-gradient-to-r from-white/30 via-white/80 to-white/30">
                                               <svg className="pt-1 pl-1 h-[20px] w-[20px]" aria-hidden="true" fill="none"
                                                    stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                         strokeLinecap="round" stroke-linejoin="round"></path>
                                               </svg>
                                               <div className="pl-3">Search</div>
                                           </button>
                                       </div>
                                   </div>
                                   <nav className="pl-4 pt-4 flex items-center">
                                       <ul>
                                           <li>categories</li>
                                       </ul>
                                   </nav>
                                   <button className="pl-4">Login</button>
                                   <div className="lg:pt-20 w-full"><FilterBlock/></div>
                               </div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                </Modal>
                <div>
                    <button className="lg:hidden"
                        onClick={()=>{
                            setMenu(prevState => !prevState)
                        }
                        }
                    >
                        <svg className="w-10 h-10 " aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex">
                    <nav className="flex items-center">
                        <ul>
                            <li>categories</li>
                        </ul>
                    </nav>
                    <button className="pl-4 pr-5">Login</button>

                    <div className=" bg-black/50  relative w-36 h-[30px]">
                        <button onClick={() => {
                            dispatch( setIsOpen(!isOpen))
                        }}
                                className="absolute h-full w-full  left-0 top-0 z-30 rounded-md flex items-center text-center bg-gradient-to-r from-white/30 via-white/80 to-white/30">
                            <svg className="pt-1 pl-1 h-[20px] w-[20px]" aria-hidden="true" fill="none"
                                 stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                      strokeLinecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <div className="pl-3">Search</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;