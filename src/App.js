import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardList from './components/CardList';
import Home from './components/Home';

function App() {
  const cards = useSelector((state) => state.dataReducer);
  return (
    <Router>
      <div className="tc">

        <Routes>
          <Route path="/" element={<CardList />} />
          {
            cards.map((card) => (
              <>
                <Route
                  key={card.country}
                  path={card.country}
                  element={<Home country={card} />}
                />
              </>
            ))
          }
        </Routes>

      </div>
    </Router>
  );
}

export default App;
