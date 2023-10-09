import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import { LandingPageDTO, landingPageDTO } from "./movies.model";
import css from "./LandingPage.module.css";
import axios, { AxiosResponse } from "axios";
import { URLmovies } from "../Endpoints";
import "@fontsource/titillium-web";
const LandingPage = () => {
  const [movies, setMovies] = useState<LandingPageDTO>({});

  useEffect(() => {
    axios
      .get(`${URLmovies}`)
      .then((response: AxiosResponse<landingPageDTO>) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <div className={css["landing-page-container"]}>
        <h3>In Theater</h3>
        <div>
          <MoviesList movies={movies.inTheaters} />
        </div>

        <h3>Upcoming Releases</h3>
        <div>
          <MoviesList movies={movies.upcomingReleases} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
