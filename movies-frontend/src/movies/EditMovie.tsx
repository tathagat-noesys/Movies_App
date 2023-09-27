import MovieForm from "./MovieForm";

const EditMovie = () => {
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
      />
    </>
  );
};

export default EditMovie;
