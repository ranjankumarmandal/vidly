import React from "react";
import Like from "./common/like";

const MoviesData = (props) => {
  const { movies, filtered } = props;

  return (
    <React.Fragment>
      <p>Showing {filtered.length} movies in the database.</p>
      <p>
        This is a demo project which covers the concept of React Components.{" "}
        <a href="https://raw.githubusercontent.com/ranjankumarmandal/vidly/master/concepts_covered_react_Compopnents.png">
          Topics Covered
        </a>
      </p>
      <table className="table">
        <thead>
          <tr>
            <th className="clickable" onClick={() => props.onSort("title")}>
              Title <i className="fa fa-fw fa-sort"></i>
            </th>
            <th
              className="clickable"
              onClick={() => props.onSort("genre.name")}
            >
              Genre <i className="fa fa-fw fa-sort"></i>
            </th>
            <th
              className="clickable"
              onClick={() => props.onSort("numberInStock")}
            >
              Stock <i className="fa fa-fw fa-sort"></i>
            </th>
            <th
              className="clickable"
              onClick={() => props.onSort("dailyRentalRate")}
            >
              Rate <i className="fa fa-fw fa-sort"></i>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => props.onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => props.onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MoviesData;
