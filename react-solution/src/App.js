import equilibrium from './assets/image-equilibrium.jpg';
import avatar from './assets/image-avatar.png';
import clock from './assets/icon-clock.svg';
import ethereum from './assets/icon-ethereum.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainCard">
        <div className="cardImage">
          <img src={equilibrium} className="card-image" alt="equilibrium" />
        </div>

        <div className="cardTitle">
          <span>
            Equilibrium #3429
          </span>
        </div>

        <div className="cardBody">
          <span>
            Our Equilibrium collection promotes balance and calm.
          </span>
        </div>

        <div className="cardData">
          <div className="cardPrice">
            <img src={ethereum} className="ethereum-icon" alt="ethereum" />
            <span>
              0.041 ETH
          </span>
          </div>
          <div className="cardTime">
            <img src={clock} className="clock-icon" alt="clock" />
            <span>
              3 days left
          </span>
          </div>
        </div>

        <div className="cardFooter">
          <img src={avatar} className="avatar-image" alt="avatar" />
          <span>
            Creation of <strong>Jules Wyvern</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
