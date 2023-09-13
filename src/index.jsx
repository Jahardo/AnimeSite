import {createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import {Provider} from "react-redux";
import {store} from "./reducers";
import App from "./components/App";


const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)