import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function ClickDrag() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isClicked, setClickStatus] = useState("No");
    const [screenClicked, setScreenClicked] = useState("No");

    // function rotateElement(elementID) {
    //     let xRotate = (x - (window.screen.width / 2)) / 10;
    //     let yRotate = (y - (window.screen.height / 2)) / 5;

    //     const element = document.getElementById(elementID);
    //     element.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    // }

    return (
        <>
            <hr></hr>
            <div className="App"
                onPointerMove={e => {
                    setX(e.clientX);
                    setY(e.clientY);
                    
                    if (screenClicked === "Yes") {
                        let xRotate = (x - (window.screen.width / 2)) / 10;
                        let yRotate = (y - (window.screen.height / 2)) / 5;

                        const parallax_elements = document.querySelectorAll(".click-drag");
                        for (let i = 0; i < parallax_elements.length; i++) {
                            parallax_elements[i].style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
                        }
                    }
            }} onMouseDown={function(){setScreenClicked("Yes")}} onMouseUp={function(){setScreenClicked("No")}}>
                <header className="App-header">
                    <div class="click-drag" onMouseDown={function(){setClickStatus("Yes")}} onMouseUp={function(){setClickStatus("No")}}>
                        <img src={logo} className="App-logo" alt="logo"/>
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
                    <p>Nucleus clicked?: {isClicked}</p>
                    <p>Whole screen clicked?: {screenClicked}</p>
                </header>
            </div>
        </>
    );
}

export { ClickDrag };
