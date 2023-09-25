import ActorForm from "./ActorForm";
import * as Yup from "yup";
const CreateActors = () => {
  return (
    <>
      <h3>Create Actors</h3>
      <ActorForm
        model={{ name: "Tom Holland", DateOfBirth: "1996-06-01T:00:00" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("this is required")
            .FirstLetterUppercase(),
        })}
      />
    </>
  );
};
export default CreateActors;
