import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import Context from '../contexts/user.context';
import Navbar from '../components/navbar.component';

import Loginpage from '../pages/login.page';
import Registerpage from '../pages/register.page';
import Homepage from '../pages/home.page';
import Secondpage from '../pages/suprise.page';

export default function App() {

    const {auth} = useContext(Context)

    return (
        <Router>
            <Navbar/>
            { auth === false && (
                <Switch>
                    <Route exact path="/" component={Loginpage}/>
                    <Route path="/register" component={Registerpage}/>
                    <Redirect to="/"/>
                </Switch>
            )}
            { auth === true && (
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/RR" component={Secondpage}/>
                    <Redirect to="/"/>
                </Switch>
            )}
        </Router>
    )
}