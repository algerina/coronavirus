import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import { getCountries } from './redux/reducers/dataReducer';
import Card from './components/Card';
import CardList from './components/CardList';
import Home from './components/Home';
// import Cards from './components/Cards';

function App() {

  return (
    <Router>
      <div className="tc">

        <Routes>
          <Route path="/" element={<CardList />} />
          <Route
            path="/Home"
            element={<Home />}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;