import { moviesDTO } from "./movies.model";
import css from "./IndividualMovie.model.css";
const IndividualMovie = ({ id, title, poster }: moviesDTO) => {
  const buildLink = () => `/movie/${id}`;
  return (
    <div key={id} className={css.main} id="main">
      <a href={buildLink()}>
        <img src={poster}></img>
      </a>

      <p>
        <a href={buildLink()}>{title}</a>
      </p>
    </div>
  );
};

export default IndividualMovie;
