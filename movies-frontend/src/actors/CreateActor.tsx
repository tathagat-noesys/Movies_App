import ActorForm from "./ActorForm";

const CreateActors = () => {
  return (
    <>
      <h3>Create Actors</h3>
      <ActorForm
        model={{
          name: "",
          DateOfBirth: undefined,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};
export default CreateActors;
