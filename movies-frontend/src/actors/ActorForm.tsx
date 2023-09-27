import { Formik, Form, FormikHelpers } from "formik";
import { actorsCreationDTO } from "./actorsmodel";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import DateField from "./../forms/DateField";
import * as Yup from "yup";
//css
import css from "./ActorForm.module.css";

export default function ActorForm(props: ActorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("* This field is required")
          .FirstLetterUppercase(),
        DateOfBirth: Yup.date().nullable().required("This field is required"),
      })}
    >
      {(formikProps) => (
        <Form className={css.form}>
          <TextField field="name" />
          <DateField displayName="Date Of Birth" field="DateOfBirth" />
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Save Changes
          </Button>
          <Link to="/actors" className="btn btn-secondary">
            Cancel
          </Link>
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
