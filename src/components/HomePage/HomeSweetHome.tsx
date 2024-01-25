import React from "react";
import { Link } from 'react-router-dom';

function HomeSweetHome(): JSX.Element {
    return (
        <>
            <h1>Home page</h1>
            <h2>You are not welcome</h2>
            <div>
                <Link to="/hello">Go to HelloPage</Link>
            </div>
            <div>
                <Link to="/nothing">Go to nothing page</Link>
            </div>
        </>
    );
}

export default HomeSweetHome;