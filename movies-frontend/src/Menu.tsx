import { NavLink } from "react-router-dom";
import "@fontsource/titillium-web";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{}}>
      <div
        className="container-fluid"
        style={{
          fontFamily: "Titillium Web",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <NavLink className="navbar-brand" to="/">
            React Movies
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/genres">
                Genres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/filter">
                Filter Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/actors">
                Actors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movietheaters">
                Movie Theaters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/create">
                Create a Movie
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
