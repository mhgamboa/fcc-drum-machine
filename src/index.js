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

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.buttonHighlight = this.buttonHighlight.bind(this);
  }
  buttonHighlight(audioElement) {
    //Allows Button To Flash
    audioElement.parentElement.classList.toggle("bg-red-500");
    setTimeout(
      () => audioElement.parentElement.classList.toggle("bg-red-500"),
      150
    );
  }

  playSound(audioElement) {
    audioElement.currentTime = 0; //Rewind To The Start
    audioElement.play();
  }
  handleKeyPress(e) {
    let key = e.key.toUpperCase();
    let audioElement = document.getElementById(`${key}`);

    if (audioElement) {
      this.buttonHighlight(audioElement);
      this.playSound(audioElement);
      this.props.updateDisplay(audioElement.dataset.soundname);
    }
  }
  handleClick(e) {
    e.preventDefault();
    let audioElement = e.target.childNodes[1];
    let soundName = audioElement.dataset.soundname;

    this.buttonHighlight(audioElement);
    this.playSound(audioElement);
    this.props.updateDisplay(soundName);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  render() {
    const style = {
      buttonsContainer: "w-full m-2 grid grid-cols-3 gap-2 h-full",
      button: "border-2 rounded transition-all duration-75",
      buttonPressed: "bg-red-500",
    };
    return (
      <section className={this.props.style}>
        <h2 className={this.props.inheritedStyle.h2}>
          Press Button = Get Groovey
        </h2>
        <div className={style.buttonsContainer}>
          {/* Map in the Buttons */}
          {bankOne.map((button) => (
            <button
              keynumber={button.keyNumber}
              className={`drum-pad ${style.button}`}
              key={button.keyCode}
              data-keycode={button.keyCode}
              onClick={this.handleClick}
              id={button.keyCode}
            >
              {button.keyTrigger}
              {/* Map in the Audio Tracks */}
              <audio
                key={button.url}
                src={button.url}
                data-keycode={button.keyCode}
                className="clip"
                id={button.keyTrigger}
                data-soundname={button.id}
              />
            </button>
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
        <h2 className={this.props.inheritedStyle.h2}>Utilities</h2>
        <div id="display">{this.props.display}</div>
      </section>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Play A Sound",
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(audioSoundName) {
    this.setState({
      display: audioSoundName,
    });
  }
  render() {
    const style = {
      base: "flex flex-col p-2",
      h1: "text-4xl w-full text-center my-2",
      main: "flex flex-wrap border-2 rounded border-gray-400",
      mainSubSections:
        "w-screen md:w-3/6 my-2 flex flex-col items-center p-2 h-96",
      h2: "text-xl m-2 font-bold",
    };
    return (
      <div className={style.base} id="drum-machine">
        <h1 className={style.h1}>Drum Machine</h1>
        <main className={style.main}>
          <DrumMachine
            style={style.mainSubSections}
            inheritedStyle={style}
            updateDisplay={this.updateDisplay}
          />
          <Utilities
            style={style.mainSubSections}
            display={this.state.display}
            inheritedStyle={style}
          />
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
