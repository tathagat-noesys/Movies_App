import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../MovieTheaters/movietheater.model";
import MovieForm from "./MovieForm";

const EditMovie = () => {
  const nonSelectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];

  const selectedGenres: genreDTO[] = [{ id: 2, name: "Drama" }];

  const nonSelectedMovieTheater: movieTheaterDTO[] = [
    { id: 1, name: "Kaveri " },
  ];

  const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 2, name: "Triveni" }];
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Toy Story",
          inTheaters: true,
          upcompingReleases: false,
          trailer: "url",
          releaseDate: new Date("2021-10-22T00:00:00"),
        }}
        onSubmit={(value) => console.log(value)}
        nonSelectedGenresState={nonSelectedGenres}
        selectedGenresState={selectedGenres}
        nonSelectedMovieTheater={nonSelectedMovieTheater}
        selectedMovieTheater={selectedMovieTheaters}
      />
    </>
  );
};

export default EditMovie;
