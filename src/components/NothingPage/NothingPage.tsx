import React from "react";
import { Link } from 'react-router-dom';

function NothingPage(): JSX.Element {
    return (<>
        <h1>There is nothing here</h1>
        <div>
            <Link to="/">Go Home</Link>
        </div>
        <div>
            <Link to="/hello">Go to HelloPage</Link>
        </div>
    </>);
}

export default NothingPage;