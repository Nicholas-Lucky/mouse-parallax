import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function DistanceToElement() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [elementCenterX, setCenterX] = useState(0);
    const [elementCenterY, setCenterY] = useState(0);

    return (
        <>
            <hr></hr>
            <div className="App"
                onPointerMove={e => {
                    setX(e.clientX);
                    setY(e.clientY);

                    const parallax_elements = document.querySelectorAll(".distance-to-element");
                    for (let i = 0; i < parallax_elements.length; i++) {
                        // Get the position of the element
                        let corners = parallax_elements[i].getBoundingClientRect();
                        let width = corners.right - corners.left;
                        let height = corners.bottom - corners.top;

                        // Calculate the coordinate of the middle of the element
                        setCenterX(corners.left + (width / 2));
                        setCenterY(corners.top + (height / 2));

                        // Use that to calculate how much to rotate the element
                        let xRotate = (elementCenterY - y) / 5;
                        let yRotate = (x - elementCenterX) / 10;

                        let maxXRotate = 60;
                        let maxYRotate = 60;

                        if (Math.abs(xRotate) > maxXRotate)
                            xRotate = 60 * (xRotate / Math.abs(xRotate));
                        if (Math.abs(yRotate) > maxYRotate)
                            yRotate = 60 * (yRotate / Math.abs(yRotate));

                        parallax_elements[i].style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
                    }
            }}>
                <header className="App-header">
                    <div class="distance-to-element">
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
                    <p>Center X: {elementCenterX}</p>
                    <p>Center Y: {elementCenterY}</p>
                </header>
            </div>
        </>
    );
}

export { DistanceToElement };
