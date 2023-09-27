import MovieTheaterForm from "./MovieTheaterForm";

const EditMovieTheater = () => {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: "Gopalan",
          latitude: 12.993396466737543,
          longitude: 77.55849838256837,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};

export default EditMovieTheater;
