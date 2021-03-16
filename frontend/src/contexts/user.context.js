import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const Context = createContext();

function ContextProvider(props) {
    const [auth, setauth] = useState(undefined);

    async function checkState () {
        const res = await axios.get("http://localhost:5000/api/is");
        setauth(res.data);
    }

    useEffect(() => {
        checkState();
    }, []);

    return (
        <Context.Provider value={{auth, checkState}}>
            {props.children}
        </Context.Provider>
    );
}

export default Context;
export {ContextProvider};