//TODO: STEP 1 - Import the useState hook.
import React , { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [teamNiners, setScoreNiners] = useState(0);
  const [teamBears, setScoreBears] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(0);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {

    let interval = null;
    if (isActive) {
      interval = setInterval (() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Niners</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{teamNiners}</div>
          </div>
          <div className="timer">{seconds}</div>
          <div className="away">
            <h2 className="away__name">Bears</h2>
            <div className="away__score">{teamBears}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => {setScoreNiners(teamNiners + 7)}} className="homeButtons__touchdown">Niners Touchdown</button>
          <button onClick={() => {setScoreNiners(teamNiners + 3)}} className="homeButtons__fieldGoal">Niners Field Goal</button>
        </div>
        <div className="timerButtons">
          <button onClick={toggle}>{isActive ? 'Pause':'Start'}</button>
          <button onClick={reset} className="resetTimerButton">Reset</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => {setScoreBears(teamBears + 7)}}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => {setScoreBears(teamBears + 3)}} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
