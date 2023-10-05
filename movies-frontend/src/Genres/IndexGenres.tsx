import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { genreDTO } from "./genres.model";
import { URLgenres } from "../Endpoints";

const IndexGenres = () => {
  useEffect(() => {
    console.log(URLgenres);
    axios
      .get(URLgenres)
      .then((res: AxiosResponse<genreDTO[]>) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary " to="/genres/create">
        Create Genre
      </Link>
    </>
  );
};

export default IndexGenres;
