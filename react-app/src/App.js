import './styles.css'

function App() {
  return (
    <div className='App'>
      <div className='instructions'>
        <h2 className='center-text'>
          Instructions
        </h2>
        <div className='blue-bg info'>
          <ul>
            <li className='list-item'>
              Click on the plus (+) buttons to increase the break or session length.
            </li>
            <li className='list-item'>
              Click on the minus (-) buttons to decrease the break or session length.
            </li>
            <li className='list-item'>
              Click on the start (&gt;) button to start a session timer or resume a paused timer.
            </li>
            <li className='list-item'>
              After a timer is started, click on the pause (||) button to pause the timer.
            </li>
            <li className='list-item'>
              Click on the reset (R) button to stop the current timer, reset the break length to 5 and reset the session length to 25.
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
          <button className='hide-button'>
            HIDE
          </button>
        </div>
      </div>
      <div className='main-content'>
        <h1 className='center-text'>
          25 + 5 Clock
        </h1>
      </div>
      <div className='about'>
        <h2 className='center-text'>
          About
        </h2>
        <div className='blue-bg info'>
          <section className='about-section'>
            This is a 25 + 5 Clock. It should help you during tasks that require concentration. Set the number of minutes you want to focus and the number of minutes you want to rest beetween work sessions. Turn off anything that might distract you, click on the start button and start working.
          </section>
          <section className='about-section'>
            This site is a solution to the <a href='site.com'>freeCodeCamp Build a 25 + 5 Clock</a> exercise. Its content is licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a> and the <a href='https://github.com/getuliosilva/25-plus-5-clock'>source code</a> is licensed under <a href='https://www.gnu.org/licenses/gpl-3.0.en.html'>GPLv3</a>.
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
          <button className='hide-button'>
            HIDE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
