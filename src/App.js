import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Friends></Friends>
    </div>
  );
}

export default App;
