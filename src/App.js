import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Leaderboard from "./views/Leaderboard";
import Profile from "./views/Profile";
import './css/App.css';

function App() {
    return (<Router>
            <Header/>
            <Switch>
                <Route path={"/leaderboard"} component={Leaderboard}/>
                <Route path={"/profile"} component={Profile}/>
            </Switch>
            <div>
            </div>
        </Router>
    );
}

export default App;
