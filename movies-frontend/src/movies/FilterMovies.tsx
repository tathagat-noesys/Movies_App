import { Field, Form, Formik } from "formik";
import { genreDTO } from "../Genres/genres.model";
import Button from "../utils/Button";

const FilterMovies = () => {
  const initialValues: FilterMoviesForm = {
    title: "",
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  };

  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Comedy" },
  ];
  return (
    <>
      <h3>Filter movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id={"title"}
                  placeholder="title of the movie"
                  {...formikProps.getFieldProps("title")}
                ></input>
              </div>
              <div className="col-auto">
                <select
                  className="form-select"
                  {...formikProps.getFieldProps("genreId")}
                >
                  <option value="0">----Choose an option----</option>
                  {genres?.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    name="upcomingReleases"
                    id="upcomingReleases"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="upcomingReleases"
                  >
                    Upcoming Releases
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    name="inTheaters"
                    id="inTheaters"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="inTheaters">
                    In Theaters
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <Button onClick={() => formikProps.submitForm()}>Filter</Button>
                <Button
                  className="btn btn-danger ms-3"
                  onClick={() => formikProps.setValues(initialValues)}
                >
                  Clear
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FilterMovies;

interface FilterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
