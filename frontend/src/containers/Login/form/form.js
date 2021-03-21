import Context from 
'../../../contexts/user.context';
import './style.css';
import Clock from '../common/Clock';

import axios from 'axios';
import { 
    useContext, 
    useState 
} from 'react';

export default function App() {

    const { status:{ checkState } } = useContext(Context);
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function onSubmit() {
        if (!form.username || !form.password) return;

        axios.post("/api/login", {
            username: form.username,
            password: form.password
        }, { timeout: 2000 })
        .then(() => {
            checkState();
        })
        .catch(() => { return });
    }

    return <div id="form-container">
        <form id="form-login">
            <input type="text" placeholder="username" className="form-input" id="input"
            value={form.username} onChange={(t) => setForm({...form, username: t.target.value})}/>

            <input type="password" placeholder="password" className="form-input" id="input"
            value={form.password} onChange={(t) => setForm({...form, password: t.target.value})}/>
            <div id="bottom-line">
                <Clock/>
                <input type="button" value="login" id="login-button" onClick={onSubmit}/>
            </div>
        </form>
    </div>
}
