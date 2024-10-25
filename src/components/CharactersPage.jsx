import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, addToFavorites } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const CharactersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { characters, loading } = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleAddToFavorites = (character) => {
    addToFavorites(character);
  };

  const navigateToDetails = (id) => {
    navigate(`/character/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {characters.map(character => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <button onClick={() => handleAddToFavorites(character)}>Add to Favorite</button>
          <button onClick={() => navigateToDetails(character.id)}>More Details</button>
        </div>
      ))}
    </div>
  );
};
export default CharactersPage;