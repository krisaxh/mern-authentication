import React from 'react';
import Router from './components/router.component';
import axios from 'axios'

import { ContextProvider } from './contexts/user.context';

axios.defaults.withCredentials = true;

export default function App() {
    return (
        <ContextProvider>
            <Router/>
        </ContextProvider>
    );
}