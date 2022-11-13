import React from 'react';
import {App} from "./App";
import {createRoot} from 'react-dom/client';
import {registerServiceWorker} from './register-service-worker';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

registerServiceWorker();