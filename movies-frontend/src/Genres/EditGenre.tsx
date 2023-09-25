import { useParams } from "react-router-dom";
import { ValidateParamsId } from "../Routes/validateParams";
import RedirectToLandingPage from "../utils/RedirectToLandingPage";
import GenreForm from "./GenreForm";

const EditGenre = () => {
  const { id }: any = useParams();

  if (!ValidateParamsId(id)) {
    return <RedirectToLandingPage />;
  }
  return (
    <>
      <h3>Edit Genre : the id is {id}</h3>
      <GenreForm
        model={{ name: "Action" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(id);
          console.log(value);
        }}
      />
    </>
  );
};

export default EditGenre;
