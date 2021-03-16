import { useState } from 'react';
import axios from 'axios';

export default function App() {

    const [form, setform]  = useState({
        username: "",
        password: "",
        passwordv: ""
    });

    const onSubmit = async (e) => {
        if (form.username.length < 4 || 
            form.password.length < 4 || 
            form.password !== form.passwordv) 
            return
            
        const req = {
            username: form.username,
            password: form.password
        }
        
        const res = await axios.post("http://localhost:5000/api/register", req, {timeout: 2000});
        console.log(res.status);
        if (res.status === 200) return setform({username: "", password: "", passwordv: ""});
        window.location = "/login";
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="username" value={form.username} onChange={(t) => setform({...form, username: t.target.value})}/>
                <input type="password" placeholder="password" value={form.password} onChange={(t) => setform({...form, password: t.target.value})}/>
                <input type="password" placeholder="re-enter password" value={form.passwordv} onChange={(t) => setform({...form, passwordv: t.target.value})}/>
                <input type="button" value="login" onClick={onSubmit}/>
            </form>
        </div>
    )
}