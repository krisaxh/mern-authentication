import { useContext, useEffect } from 'react';

import Clock from './Clock';
import Context from '../../../contexts/user.context';
import axios from 'axios';


export default function App() {
    const { profile:{user, checkUser} } = useContext(Context);

    const logout = async () => {
        await axios.get("/api/logout");
        window.location.reload();
    }

    useEffect(() => checkUser());

    return <div style={{position:"relative",float:"right"}}>
        <div style={{width:"90px"}}>
            <Clock/>
            <h4 style={{userSelect:"none"}}>Welcome back, {user}!</h4>
            <button onClick={logout}>Logout!</button>
        </div>
    </div>
}