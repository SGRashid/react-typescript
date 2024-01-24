import React from "react";
import { Link } from 'react-router-dom';

const HelloPage: React.FC = () => <>
    <h1>Hello</h1>
    <div>
        <Link to="/">Go Home</Link>
    </div>
    <div>
        <Link to="/nothing">Go to HelloPage</Link>
    </div>
</>;

export default HelloPage;