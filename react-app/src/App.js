import { useEffect, useRef, useState } from "react";

import './styles.css'

function App() {
  const [showInstructions, setShowInstructions] = useState(true)
  const [showAbout, setShowAbout] = useState(true)
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [sessionStarted, setSessionStarted] = useState(false)
  const [timerIsRunning, setTimerIsRunning] = useState(false)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timerLabel, setTimerLabel] = useState('Session')

  const audioRef = useRef(null)

  useEffect( () => 
    {
      function updateTimer() {
        // FCC test suite test 14 bug???
        if(sessionLength < 1){
          setSessionLength(1)
          setMinutes(1)
        }
        if(timerIsRunning) {
          if(seconds === 0) {
            if(minutes === 0) {
              playAudio()
              setSeconds(0)
              if(timerLabel === 'Session'){
                setTimerLabel('Break')
                setMinutes(breakLength)
                return
              }
              else if(timerLabel === 'Break'){
                setTimerLabel('Session')
                setMinutes(sessionLength)
                return
              }
            }
            setSeconds(59)
            setMinutes(prev => prev - 1)
            
          }
          else {
            setSeconds(prev => prev - 1)
          }
        }
      }

      const timerId = setInterval(updateTimer, 1000)
      return (() => clearInterval(timerId))
    }, 
    
  )

  const instructionsVisible = 
    <div className='blue-bg info'>
      <ul className='bottom-20px ovfx-scrl'>
        <li className='list-item'>
          Click on the plus (+) buttons to increase the break or session length.
        </li>
        <li className='list-item'>
          Click on the minus (-) buttons to decrease the break or session length.
        </li>
        <li className='list-item'>
          Click on the start 
          (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>) 
          button to start a session timer or resume a paused timer.
        </li>
        <li className='list-item'>
          After a timer is started, click on the pause 
          (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
          </svg>) 
          button to pause the timer.
        </li>
        <li className='list-item'>
          Click on the reset 
          (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg>) 
          button to stop the current timer, reset the break length to 5 and reset the session length to 25.
        </li>
        <li className='list-item'>
          When the timer reaches 00:00 it will sound an alarm three times.
        </li>
        <li className='list-item'>
          When a session timer reaches 00:00, a break timer will begin.
        </li>
        <li className='list-item'>
          When a break timer reaches 00:00, a session timer will begin.
        </li>
      </ul>
      <button 
        className='hide-button'
        onClick={handleInstructions}
      >
        HIDE
      </button>
    </div>

  const instructionsHidden =
    <div className='blue-bg info-hidden'>
      <button 
        className='show-button'
        onClick={handleInstructions}
      >
        SHOW
      </button>
    </div>

  const aboutVisible =
    <div className='blue-bg info'>
      <div className='ovfx-scrl bottom-20px'>
        <section className='about-section'>
          This is a 25 + 5 Clock. It should help you during tasks that require concentration. Set the number of minutes you want to focus and the number of minutes you want to rest beetween work sessions. Turn off anything that might distract you, click on the start button and start working.
        </section>
        <section className='about-section'>
          This site is a solution to the <a href='https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock'>freeCodeCamp Build a 25 + 5 Clock</a> exercise. Its content is licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a> and the <a href='https://github.com/getuliosilva/25-plus-5-clock'>source code</a> is licensed under <a href='https://www.gnu.org/licenses/gpl-3.0.en.html'>GPLv3</a>.
        </section>
        <section className='about-section'>
          My name is Getúlio and I'm a software developer.
          You can find me on:
          <ul>
            <li className='list-item'>
              <a href='https://www.freecodecamp.org/getuliosilva'>freeCodeCamp</a>
            </li>
            <li className='list-item'>
              <a href='https://github.com/getuliosilva'>GitHub</a>
            </li>
            <li className='list-item'>
              <a href='http://www.linkedin.com/in/getuliosilva'>LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>
      <button 
        className='hide-button'
        onClick={handleAbout}
      >
        HIDE
      </button>
    </div>

  const aboutHidden =
    <div className='blue-bg info-hidden'>
      <button 
        className='show-button'
        onClick={handleAbout}
      >
        SHOW
      </button>
    </div>

  function handleInstructions() {
    setShowInstructions(!showInstructions)
  }

  function handleAbout() {
    setShowAbout(!showAbout)
  }

  function handleReset() {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setBreakLength(5)
    setSessionLength(25)
    setMinutes(25)
    setSeconds(0)
    setTimerIsRunning(false)
    setSessionStarted(false)
    setTimerLabel('Session')
  }

  function handleBreakDecrement() {
    if(!sessionStarted && breakLength > 1) {
      setBreakLength(prev => prev - 1)
    }
  }

  function handleBreakIncrement() {
    if(!sessionStarted && breakLength < 60) {
      setBreakLength(prev => prev + 1)
    }
  }

  function handleSessionDecrement() {
    if(!sessionStarted && sessionLength > 1) {
      setSessionLength(prev => prev - 1)
      setMinutes(prev => prev - 1)
    }
  }

  function handleSessionIncrement() {
    if(!sessionStarted && sessionLength < 60) {
      setSessionLength(prev => prev + 1)
      setMinutes(prev => prev + 1)
    }
  }

  function handleStartStop() {
    if(!timerIsRunning && !sessionStarted) {
      setMinutes(sessionLength)
      setSessionStarted(true)
    }
    setTimerIsRunning(prev => !prev)
  }

  function playAudio() {
    audioRef.current.play()
    audioRef.current.currentTime = 0
  }

  return (
    <div className='App flex-row'>
      <div id='instructions' className='instructions'>
        <h2 className='center-text'>
          Instructions
        </h2>
        {showInstructions ? instructionsVisible : instructionsHidden}
        <a 
          href='#main-content'
          className='btn-mobile-nav'
        >
          Back to top
        </a>
      </div>
      <div id='main-content' className='main-content'>
        <h1 className='center-text'>
          25 + 5 Clock
        </h1>
        <div className='controls center-text flex-col'>
          <div className='controls-length flex-row'>
            <div className='br-len blue-bg flex-col block-1'>
              <p id='break-label' className='text-1'>Break Length</p>
              <div className='controls-br'>
                <button 
                  id='break-decrement'
                  className='btn-sm'
                  onClick={handleBreakDecrement}
                >
                  -
                </button>
                <p id='break-length' className='text-2'>{breakLength}</p>
                <button 
                  id='break-increment' 
                  className='btn-sm'
                  onClick={handleBreakIncrement}
                >
                  +
                </button>
              </div>
            </div>
            <div className='se-len blue-bg flex-col block-1'>
              <p id='session-label' className='text-1'>Session Length</p>
              <div className='controls-se'>
                <button 
                  id='session-decrement'
                  className='btn-sm'
                  onClick={handleSessionDecrement}
                >
                  -
                </button>
                <p id='session-length' className='text-2'>{sessionLength}</p>
                <button 
                  id='session-increment'
                  className='btn-sm'
                  onClick={handleSessionIncrement}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className='timer blue-bg flex-col center-text block-2'>
            <p id='timer-label' className='text-3'>{timerLabel}</p>
            <div id='time-left' className='flex-row text-4'>
              {minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
              + ':' +
              seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
            </div>
          </div>
          <div className='controls-state flex-row'>
            <button 
              id='start_stop'
              className='button-s-p btn-ctr block-1'
              onClick={handleStartStop}
            >
              {
                timerIsRunning ?
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
              }
            </button>
            <button 
              id='reset'
              className='button-r btn-ctr block-1'
              onClick={handleReset}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
              </svg>
            </button>
          </div>
        </div>
        <a 
          href='#instructions'
          className='btn-mobile-nav'
        >
          Instructions
        </a>
        <a 
          href='#about' 
          className='btn-mobile-nav'
        >
          About
        </a>
      </div>
      <div id='about' className='about'>
        <h2 className='center-text'>
          About
        </h2>
        {showAbout ? aboutVisible : aboutHidden}
        <a 
          href='#main-content'
          className='btn-mobile-nav'
        >
          Back to top
        </a>
      </div>
      <audio
        id='beep'
        src='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        preload='auto'
        ref={audioRef}
      >
      </audio>
    </div>
  );
}

export default App;