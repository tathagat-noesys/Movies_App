import { Formik, Form, FormikHelpers } from "formik";
import { actorsCreationDTO } from "./actorsmodel";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function ActorForm(props: ActorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("* This field is required")
          .FirstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" />
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Save Changes
          </Button>
          <Link to="/actors" className="btn btn-scondary"></Link>
        </Form>
      )}
    </Formik>
  );
}
interface ActorFormProps {
  model: actorsCreationDTO;
  onSubmit(
    values: actorsCreationDTO,
    action: FormikHelpers<actorsCreationDTO>
  ): void;
}
