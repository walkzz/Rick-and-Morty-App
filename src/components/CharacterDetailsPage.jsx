import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetails } from '../redux/actions';
import { useParams } from 'react-router-dom';
const CharacterDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { character, loading } = useSelector(state => state.characterDetails);

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      {/* <p>Origin: {character.origin.name}</p> */}
      {/* <p>Location: {character.location.name}</p> */}
      
      {/* the origin and location name doesn't work for some reason, so i'm leaving them in a comment block */}
    </div>
  );
};
export default CharacterDetailsPage;