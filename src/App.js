import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
