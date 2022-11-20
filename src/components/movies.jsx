import React, { Component } from "react";
import MoviesTable from './moviesTable';
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// import Like from "./common/like";
import { paginate } from '../utils/paginate';
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc'}
  };

  componentDidMount() {
    const genres = [{ _id: "", name: 'All Genres'}, ...getGenres()];

    // this.setState({ movies: getMovies(), genres: getGenres()});
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    // console.log('Like Clicked', movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenresSelect = genre => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  // handleSort = path => {
  handleSort = sortColumn => {
    // console.log(path);
    // const sortColumn = {...this.state.sortColumn};
    // if(sortColumn.path === path)
    //   sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    // else {
    //   sortColumn.path = path;
    //   sortColumn.order = 'asc';
    // }
    // this.setState({ sortColumn: { path, order: 'asc'}});
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { 
      pageSize, 
      currentPage,
      sortColumn,
      selectedGenre, 
      movies: allMovies 
    } = this.state;

    const filtered = 
     selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
      : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    // const { 
    //   pageSize, 
    //   currentPage,
    //   sortColumn,
    //   selectedGenre, 
    //   movies: allMovies 
    // } = this.state;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    // const filtered = 
    //  selectedGenre && selectedGenre._id
    //   ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
    //   : allMovies;

    // const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // const movies = paginate(allMovies, currentPage, pageSize);

    // const movies = paginate(sorted, currentPage, pageSize);
    // console.log(movies);

    const { totalCount, data: movies} = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          {/* <ListGroup 
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenresSelect}
          /> */}
          <ListGroup 
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenresSelect}
          />
        </div>
        <div className="col">
          {/* <p>Showing {count} movies in the database.</p> */}
          {/* <p>Showing {filtered.length} movies in the database.</p> */}
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable 
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike} 
            onDelete={this.handleDelete}
            onSort={this.handleSort} 
          />
          {/* <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}

          {/* <Pagination 
            itemsCount={count} 
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          /> */}
          <Pagination 
            // itemsCount={filtered.length} 
            itemsCount={totalCount} 
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
