import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");    // axios.get()이 시간이 걸리므로 async-await을 써서 기다려달라고 신호
    this.setState({movies, isLoading: false});    //{movies: movies} 하나는 state의 movies, 하나는 axios의 movies
  }

  componentDidMount() {
    this.getMovies();       // js의 비동기 특성때문에, 함수를 써서 getMoives가 끝나면 componentDidMount를 실행하도록 함
  }                         // 그렇지 않으면, axios.get()이 실행되지 않은 상태에서 componentDidMount가 실행되서 빈 데이터가 넘어오기 때문

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        { isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          movies.map(movie => (       // 로딩중이면 "Loading", 아니면 Movie 변수들 가져오기
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}   
            />
          ))
        )}
      </section>
    );
  }
}

export default App;
