import { Link } from "react-router-dom";

const IndexGenres = () => {
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary " to="/genres/create">
        Create Genre
      </Link>
    </>
  );
};

export default IndexGenres;
