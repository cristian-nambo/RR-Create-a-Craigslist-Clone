// Import data

// Import components
import './App.css';
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar'
import Sidebar from './Components/Sidebar'

function App(){
  return (
    <div>
      <h1>CrisList</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
