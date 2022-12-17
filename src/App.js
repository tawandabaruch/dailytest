import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoCall from "./pages/meeting";
import JoinMeeting from "./pages/join";

import "./App.css";

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route exact path="/" component={JoinMeeting} />
                        <Route exact path="/video/:id" component={VideoCall} />
                    </Routes>
                </Router>
            </>
        );
    }
}
