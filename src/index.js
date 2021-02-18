import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    const style = {
      base: "flex",
      h1: "text-4xl w-full text-center",
    };
    return (
      <div className={style.base}>
        <h1 className={style.h1}>Hello World H1</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
