import React, { Component } from 'react';
// import TableHeader from './common/tableHeader';
// import TableBody from './common/tableBody';
import { Link } from 'react-router-dom';
import Table from './common/table';
import Like from './common/like';

// const MoviesTable = (props) => {
//   const { movies, onDelete, onLike, onSort } = props;

//     return ( 
//         <table className="table">
//             <thead>
//               <tr>
//                 <th onClick={() => onSort('title')}>Title</th>
//                 <th onClick={() => onSort('genre.name')}>Genre</th>
//                 <th onClick={() => onSort('numberInStock')}>Stock</th>
//                 <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
//                 <th />
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {movies.map(movie => (
//                 <tr key={movie._id}>
//                   <td>{movie.title}</td>
//                   <td>{movie.genre.name}</td>
//                   <td>{movie.numberInStock}</td>
//                   <td>{movie.dailyRentalRate}</td>
//                   <td>
//                     <Like liked={movie.liked} onClick={() => onLike(movie)}/>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => onDelete(movie)}
//                       className="btn btn-danger btn-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//      );
// }

// const  x = <Like></Like>; // React Element

class MoviesTable extends Component { 
  // state = {  }
  // raiseSort = path => {
  //   const sortColumn = {...this.props.sortColumn};
  //   if(sortColumn.path === path)
  //     sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
  //   else {
  //     sortColumn.path = path;
  //     sortColumn.order = 'asc';
  //   }
  //   this.props.onSort(sortColumn);
  // };

  columns = [
    // {path: 'title', label: 'Title' },
    {
      path: 'title', 
      label: 'Title', 
      content: movie => <Link to={`/movies/${movie._id}`} >{movie.title}</Link> 
    },
    {path: 'genre.name', label: 'Genre' },
    {path: 'numberInStock', label: 'Stock' },
    {path: 'dailyRentalRate', label: 'Rate' },
    { 
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>
      )
    },
    { 
      key: 'delete',
      content: movie => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
      )
    },
  ];

  render() { 
    // return ();
    // const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    const { movies, onSort, sortColumn } = this.props;

    return ( 
        // <table className="table">
            // {/* <thead>
            //   <tr>
            //     <th onClick={() => onSort('title')}>Title</th>
            //     <th onClick={() => onSort('genre.name')}>Genre</th>
            //     <th onClick={() => onSort('numberInStock')}>Stock</th>
            //     <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
            //     <th onClick={() => this.raiseSort('title')}>Title</th>
            //     <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
            //     <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
            //     <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
            //     <th />
            //     <th />
            //   </tr>
            // </thead> */}
            // {/* <TableHeader 
            //   columns={this.columns} 
            //   sortColumn={sortColumn} 
            //   onSort={onSort}
            // />
            // <TableBody columns={this.columns} data={movies}/> */}
            // {/* <tbody>
            //   {movies.map(movie => (
            //     <tr key={movie._id}>
            //       <td>{movie.title}</td>
            //       <td>{movie.genre.name}</td>
            //       <td>{movie.numberInStock}</td>
            //       <td>{movie.dailyRentalRate}</td>
            //       <td>
            //         <Like liked={movie.liked} onClick={() => onLike(movie)}/>
            //       </td>
            //       <td>
            //         <button
            //           onClick={() => onDelete(movie)}
            //           className="btn btn-danger btn-sm"
            //         >
            //           Delete
            //         </button>
            //       </td>
            //     </tr>
            //   ))}
            // </tbody> */}
          // </table>
          <Table 
            columns={this.columns} 
            data={movies} 
            sortColumn={sortColumn} 
            onSort={onSort} 
          />
     );
  }
}
 
export default MoviesTable;
// export default MoviesTable;