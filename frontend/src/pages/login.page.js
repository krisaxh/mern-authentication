import { useState, useContext } from 'react';
import axios from 'axios';

import Context from '../contexts/user.context';

export default function App() {

    const [form, setform]  = useState({
        username: "",
        password: ""
    });

    const { checkState } = useContext(Context);

    const onSubmit = async (e) => {
        if (!form.username || !form.password) return

        const req = {
            username: form.username,
            password: form.password
        }
        
        const res = await axios.post("http://localhost:5000/api/login", req, {timeout: 2000});
        checkState();
    }

    return (
        <div>
            <form>
            <input type="text" placeholder="username" value={form.username} onChange={(t) => setform({...form, username: t.target.value})}/>
                <input type="password" placeholder="password" value={form.password} onChange={(t) => setform({...form, password: t.target.value})}/>
                <input type="button" value="login" onClick={onSubmit}/>
            </form>
        </div>
    )
}