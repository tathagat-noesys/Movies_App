import MovieTheaterForm from "./MovieTheaterForm";

const CreateMovieTheater = () => {
  return (
    <>
      <h3>Create Movie Theater</h3>
      <MovieTheaterForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};

export default CreateMovieTheater;
