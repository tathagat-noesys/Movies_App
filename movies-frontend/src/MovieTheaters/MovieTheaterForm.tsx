import { Form, Formik, FormikHelpers } from "formik";
import TextField from "./../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { movieTheaterCreationDTO } from "./movietheater.model";
import * as Yup from "yup";
import css from "./MovieTheaterForm.module.css";
import Map from "../utils/Map";
const MovieTheaterForm = (props: MovieTheaterProps) => {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationScheme={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .FirstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" />
          <div className={css["div"]}>
            <Map />
          </div>
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to={"/movietheaters"}>
            {" "}
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default MovieTheaterForm;

interface MovieTheaterProps {
  model: movieTheaterCreationDTO;
  onSubmit(
    values: movieTheaterCreationDTO,
    actions: FormikHelpers<movieTheaterCreationDTO>
  ): void;
}
