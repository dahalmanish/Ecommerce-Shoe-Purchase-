import React from "react";
import "./Demo.css";
import "./components/leftat.css";
import "./components/index.css";
import Arrive from "./components/index";
import Trending from "./components/trending";
import Navbar from "./components/Navbar";
import Write from "./components/leftat";

function App() {
    return (
        <>
        <div className="header">
            <Navbar />
            <Write />
            <Arrive/>
            <Trending/>
        </div>
        </>
    );
}

export default App;

