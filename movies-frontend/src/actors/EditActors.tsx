import ActorForm from "./ActorForm";

const EditActors = () => {
  return (
    <>
      <h3>Edit Actors</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          DateOfBirth: new Date("1995-01-22T13:06:58.838Z"),
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg",
          biography: `# Tom Holland  \n He was born in **London** in 1995`,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};

export default EditActors;
