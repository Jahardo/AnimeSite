import React, {useState} from 'react';

const TimeLineBlock = () => {
    const min = 1971
    const max = 2023
    const [years, setYears] = useState([min, max])
    const [leftPadding, setLeftPadding] = useState("0")
    const [rightPadding, setRightPadding] = useState("0")
    return (
        <div>
            <div>
                <div className="flex ">
                    <div className="flex pl-1">
                        <span className="hover:text-white">min</span>
                        <input
                            onChange={event => {
                                setYears(years)
                            }}
                            type="text"
                            value={years[0]}
                            className=" ml-2 text-center w-12 text-sm  bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex pl-1">
                        <span className="hover:text-white ">max</span>
                        <input
                            nChange={event => {
                                setYears(years)
                            }}
                            type="text"
                            value={years[1]}
                            className=" ml-2 text-center w-12 text-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </div>
                <div>{years.map(year => <div>{year}</div>)}
                </div>
                <div className="mt-2 px-1 relative ">
                    <div className="h-[8px] w-full bg-gray-100 relative rounded-r-md rounded-l-md ">
                        <div style={{
                            left: `${leftPadding > 0 ? Math.floor(leftPadding) + "%" : leftPadding}`,
                            right: `${rightPadding > 0 ? Math.floor(rightPadding) + "%" : rightPadding}`
                        }} className={`h-[8px] bg-aubergine-700/80 absolute z-10`}></div>
                        <div className="relative -top-2">
                            <input type="range"
                                   onChange={(event) => {
                                       event.target.value >= min && event.target.value <= max && event.target.value <= years[1] - 1 ? setLeftPadding(((event.target.value - min) / (max - min) * 100)) : setLeftPadding(prevState => prevState)
                                       event.target.value >= min && event.target.value <= max && event.target.value <= years[1] - 1 ? setYears(prevState => [event.target.value, prevState[1]]) : setYears(prevState => [prevState[0], prevState[1]])
                                   }}
                                   min={min}
                                   max={max}
                                   value={years[0]}
                                   className="w-full pointer-events-none absolute z-20 bg-transparent left-0 top-0 appearance-none cursor-pointer  range range-xs  [&::-moz-range-thumb]:bg-aubergine-700  [&::-moz-range-thumb]:border-transparent hover[&::-moz-range-thumb]:border-gray-200  hover:[&::-moz-range-thumb]:bg-aubergine-900 "/>
                            <input
                                onChange={(event) => {
                                    event.target.value <= max && event.target.value >= min && event.target.value >= years[0] + 1 ? setRightPadding(100 - (event.target.value - min) / (max - min) * 100) : setRightPadding(prevState => prevState)
                                    event.target.value <= max && event.target.value >= min && event.target.value >= years[0] + 1 ? setYears(prevState => [prevState[0], event.target.value]) : setYears(prevState => [prevState[0], prevState[1]])
                                }}
                                type="range"
                                min={min} max={max}
                                value={years[1]}
                                className="w-full pointer-events-none absolute z-20 bg-transparent left-0 top-0 appearance-none cursor-pointer  range range-xs  [&::-moz-range-thumb]:bg-aubergine-700 [&::-moz-range-thumb]:border-transparent hover[&::-moz-range-thumb]:border-gray-200 hover:[&::-moz-range-thumb]:bg-aubergine-900 "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLineBlock;