import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function Page() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div className="App"
            onPointerMove={e => {
                setX(e.clientX);
                setY(e.clientY);
        }}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <p>X: {x}</p>
                <p>Y: {y}</p>
            </header>
        </div>
    );
}

export { Page };
