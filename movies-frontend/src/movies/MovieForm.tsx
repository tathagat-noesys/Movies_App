import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "./../forms/CheckBoxField";
const MovieForm = (props: movieFormProps) => {
  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("This is requried")
            .FirstLetterUppercase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="title" />
            <CheckboxField displayName="In Theaters" field="inTheaters" />
            <TextField field="trailer" />
            <DateField displayName="Release Date" field={"releaseDate"} />
            <ImageField
              displayName="Poster"
              field="poster"
              imageUrl={props.model.posterUrl}
            />

            <Button disabled={formikProps.isSubmitting} type="submit">
              Save Changes
            </Button>
            <Link to={"/genres"} className="btn btn-secondary">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MovieForm;

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
}
