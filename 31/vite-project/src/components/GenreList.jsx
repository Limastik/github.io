import React from 'react';

const genres = ['Drama', 'Thriller', 'Supernatural'];

const GenreList = () => {
  return (
    <div className="stranger-genre">
      {genres.map((genre, index) => (
        <div key={index} className="genre-item">
          {genre}
        </div>
      ))}
    </div>
  );
};

export default GenreList;
