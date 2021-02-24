import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

class DrumButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const button='border-2 rounded'
    return(
      <button className="button">{this.props.keyTrigger}</button>
    )
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      h2: "text-2xl m-2",
      buttonsContainer: "w-full",
      button: ""
    };
    return (
      <section className={this.props.style}>
        <h2 className={style.h2}>Press Button = Get Groovey</h2>
        <div className={style.buttonsContainer}>
          {bankOne.map((button) => (
            <DrumButton key={button.keyCode} className="button" keyTrigger={button.keyTrigger}/>
          ))}
          {bankOne.map((button) => (
            <audio 
            key={button.url}
            src={button.url}
            keyCode={button.keyCode}
            controls/>
          ))}
        </div>
      </section>
    );
  }
}

class Utilities extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={this.props.style}>
        <h2>Hello</h2>
      </section>
    );
  }
}
class App extends React.Component {
  render() {
    const style = {
      base: "flex flex-col",
      h1: "text-4xl w-full text-center m-2",
      main: "flex flex-wrap",
      mainSubSections:
        "w-screen m-2 border-2 flex flex-col items-center rounded border-gray-400 p-2", //Style for DrumMachine & utilities
    };
    return (
      <div className={style.base}>
        <h1 className={style.h1}>Drum Machine</h1>
        <main className={style.main}>
          <DrumMachine style={style.mainSubSections} />
          <Utilities style={style.mainSubSections} />
        </main>
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
