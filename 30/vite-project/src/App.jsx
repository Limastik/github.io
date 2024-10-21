// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GenreList from './components/GenreList';
import MovieTitle from './components/MovieTitle';
import MovieInfo from './components/MovieInfo';
import MovieDescription from './components/MovieDescription';
import AgeRating from './components/AgeRating';
import StarRating from './components/StarRating';
import ButtonsContainer from './components/ButtonsContainer';
import MovieContainer from './components/MovieContainer';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <GenreList />
        <MovieTitle title="Stranger Things" />
        <MovieInfo 
          year="2019" 
          director="Shawn Levy" 
          seasons="3 (5 episodes)" 
        />
        <MovieDescription 
          description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
        />
        <AgeRating age="16+" />
        <StarRating count={4} />
        <ButtonsContainer />
        <MovieContainer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
