import ActorForm from "./ActorForm";

const CreateActors = () => {
  return (
    <>
      <h3>Create Actors</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          DateOfBirth: new Date("1995-01-22T13:06:58.838Z"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};
export default CreateActors;
