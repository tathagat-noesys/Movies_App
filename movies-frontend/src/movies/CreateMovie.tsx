import MovieForm from "./MovieForm";
const CreateMovie = () => {
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
      />
    </>
  );
};

export default CreateMovie;
