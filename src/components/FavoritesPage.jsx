const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h2>You can find your favorite characters here</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map(favorite => (
          <div key={favorite.id} className="favorite-card">
            <img src={favorite.image} alt={favorite.name} />
            <h3>{favorite.name}</h3>
            {/* adding the same character as favorite will give an error */}
          </div>
        ))
      )}
    </div>
  );
};
export default FavoritesPage;