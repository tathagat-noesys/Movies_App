import { moviesDTO } from "./movies.model";
import css from "./IndividualMovie.model.css";
import { Link } from "react-router-dom";
const IndividualMovie = ({ id, title, poster }: moviesDTO) => {
  const buildLink = () => `/movies/${id}`;
  return (
    <div key={id} className={css.main} id="main">
      <Link to={buildLink()}>
        <img src={poster}></img>
      </Link>

      <p>
        <Link to={buildLink()}>{title}</Link>
      </p>
    </div>
  );
};

export default IndividualMovie;
