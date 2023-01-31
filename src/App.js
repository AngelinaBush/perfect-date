
import './App.css';
import Man from './Man';
import Outfit from './Outfit';
import Place from './Place';


function App() {
  return (
    <div>
      <div className="header-container">
        <h1>Your perfect date</h1>
      </div>
      <div className='container-app'>
        <Outfit />
        <Man />
        <Place />
      </div>
    </div>
  );
}

export default App;
