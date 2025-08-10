import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function FollowCursor() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div className="App"
            onPointerMove={e => {
                setX(e.clientX);
                setY(e.clientY);
                
                let xRotate = (x - (window.screen.width / 2)) / 10;
                let yRotate = (y - (window.screen.height / 2)) / 5;

                const parallax_elements = document.querySelectorAll(".follow-cursor-basic");
                for (let i = 0; i < parallax_elements.length; i++) {
                    parallax_elements[i].style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
                }

                // parallax_elements.style.transform = `perspective(1000px) rotateX(${x / 90}deg) rotateY(${y / 50}deg)`;
        }}>
            <header className="App-header">
                <div class="follow-cursor-basic">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>

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

export { FollowCursor };
