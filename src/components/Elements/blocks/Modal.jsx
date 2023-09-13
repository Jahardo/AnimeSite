import React from 'react';
import {createPortal} from "react-dom";

const Modal = ({children}) => {
    return createPortal(
        <div>
            {children}

        </div>,
        document.getElementById("portal")
    )
};

export default Modal;