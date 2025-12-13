import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

// Using JSX - HTML-Like or XML-Like syntax
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// Babel converts JSX to React Element
// (Transpiled before it reaches the JS) - PARCEl => Babel 
// const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;

// React Functional Componenet - returns jsx element (Name should start with capital letter)
const Heading = () => (
    <div id="container">
        {Title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<Heading />);