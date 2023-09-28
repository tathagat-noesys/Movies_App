import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../MovieTheaters/movietheater.model";
import MovieForm from "./MovieForm";
const CreateMovie = () => {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Drama" },
  ];

  const nonSelectedMovieTheater: movieTheaterDTO[] = [
    { id: 1, name: "Kaveri " },
    { id: 2, name: "Triveni" },
  ];
  return (
    <>
      <h3>Create Movies</h3>
      <MovieForm
        model={{
          title: "",
          inTheaters: false,
          upcompingReleases: false,
          trailer: "",
        }}
        onSubmit={(value) => console.log(value)}
        nonSelectedGenresState={nonSelectedGenres}
        selectedGenresState={[]}
        nonSelectedMovieTheater={nonSelectedMovieTheater}
        selectedMovieTheater={[]}
        SelectedActorsState={[]}
      />
    </>
  );
};

export default CreateMovie;
