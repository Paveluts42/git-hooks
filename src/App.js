import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";

function App() {
    return (<>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path={"/"}exact  component={Home}/>
                    <Route path={"/about"}component={About}/>
                    <Route path={"/profile/:name"} component={Profile}/>
                </Switch>

            </div>
        </>
    );
}

export default App;
