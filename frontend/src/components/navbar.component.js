import { Link } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

import Context from '../contexts/user.context';

export default function App() {

    const { auth, checkState } = useContext(Context);


    const onSubmit = async () => {
        await axios.get("http://localhost:5000/api/logout", {timeout: 2000});
        checkState();
    }

    return (
        <div>
            {auth === true && (
                <>
                    <Link to="/">Home</Link>
                    <Link to="/RR">Second page</Link>
                    <Link onClick={onSubmit}>Logout</Link>
                </>
            )}
        </div>
    )
}