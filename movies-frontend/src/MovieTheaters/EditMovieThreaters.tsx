import MovieTheaterForm from "./MovieTheaterForm";

const EditMovieTheater = () => {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: "Triveni Theaters, Majestic",
          latitude: 12.976142677695359,
          longitude: 77.57539093494417,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};

export default EditMovieTheater;
