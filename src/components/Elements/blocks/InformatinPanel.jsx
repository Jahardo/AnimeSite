import React from 'react';

const InformationPanel = (props) => {
    const {text,width} = props
    return (
        <div>
            <div className={`bg-athens-gray-900  w-${width} h-8`}>
                <div className={`w-3 bg-zeus-950 h-8 absolute z-0`}></div>
                <div className="pl-8 z-10 text-white text-justify text-start pt-0.5">{text}</div>
            </div>
        </div>
    );
};

export default InformationPanel;