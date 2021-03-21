import { useContext } from 'react'
import { 
    BrowserRouter as Router, 
    Redirect,
    Switch, 
    Route 
} from 'react-router-dom';

import Context from '../../contexts/user.context';

import HomePage from '../../containers/Home/index';
import LoginPage from '../../containers/Login/index';

export default function App() {
    const { status:{ auth } } = useContext(Context);

    return <Router>
        { auth === false && (
            <Switch>
                <Route exact path="/login" component={LoginPage}/>
                {/* <Route exact path="/register" component={RegisterPage}/> */}
                <Redirect to="/login"/>
            </Switch>
        )}
        { auth === true && (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Redirect to="/"/>
            </Switch>
        )}
    </Router>
}