import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { genreCreationDTO } from "../Genres/genres.model";
import { ValidateParamsId } from "../Routes/validateParams";
import RedirectToLandingPage from "./RedirectToLandingPage";
import axios, { AxiosResponse } from "axios";
import { URLgenres } from "../Endpoints";
import DisplayErrors from "./DisplayError";
import GenreForm from "../Genres/GenreForm";
import Loading from "./Loading";

const EditEntity = (props: editEntityProps) => {
  const { id }: any = useParams();
  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  if (!ValidateParamsId(id)) {
    return <RedirectToLandingPage />;
  }

  useEffect(() => {
    axios
      .get(`${URLgenres}/${id}`)
      .then((res: AxiosResponse<genreCreationDTO>) => {
        console.log(res.data);
        setGenre(() => res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const edit = async (genreToEdit: genreCreationDTO) => {
    try {
      await axios.put(`${URLgenres}/${id}`, genreToEdit);
      navigate("/genres");
    } catch (err: object | any) {
      if (err && err.response) {
        setErrors(err.response.data);
      }
    }
  };
  return (
    <>
      <h3>Edit Genre </h3>
      <DisplayErrors errors={errors} />
      {genre ? (
        <GenreForm
          model={genre}
          onSubmit={async (value) => {
            await edit(value);
          }}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditEntity;

interface editEntityProps {}
