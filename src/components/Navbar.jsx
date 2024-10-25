import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // so the website doesn't refresh
    navigate(`/search?name=${searchTerm}`);
  };

  return (
    <nav>
      <Link to="/characters">Characters</Link>
      <Link to="/favorites">Favorites</Link>
      <form className='form-search' onSubmit={handleSearch}>
        <input
          className='character-search'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search characters..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};
export default Navbar;