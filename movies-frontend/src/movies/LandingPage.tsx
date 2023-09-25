import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import { LandingPageDTO } from "./movies.model";
import css from "./LandingPage.module.css";
const LandingPage = () => {
  const [movies, setMovies] = useState<LandingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider Man far from Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
          },
          {
            id: 3,
            title: "Kung fu Panda",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
          },
          {
            id: 4,
            title: "Dr Strange",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg",
          },
          {
            id: 5,
            title: "Venom",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png",
          },
        ],
        upcompingReleases: [
          {
            id: 1,
            title: "Venom - Let there be carnage",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg",
          },
          {
            id: 2,
            title: "Puss in Boots: The Last Wish",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
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
          <MoviesList movies={movies.upcompingReleases} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
