import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharactersPage from './components/CharactersPage';
import FavoritesPage from './components/FavoritesPage';
import CharacterDetailsPage from './components/CharacterDetailsPage';
import "./App.css"
function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
        <Route path="/search" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
};
export default App;