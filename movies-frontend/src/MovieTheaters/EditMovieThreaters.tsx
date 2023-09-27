import MovieTheaterForm from "./MovieTheaterForm";

const EditMovieTheater = () => {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{ name: "Gopalan" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};

export default EditMovieTheater;
