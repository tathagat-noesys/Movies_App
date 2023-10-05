import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { genreDTO } from "./genres.model";
import { URLgenres } from "../Endpoints";
import GenericList from "../utils/GenericListComponen";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";

const IndexGenres = () => {
  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState<number>(0);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  const select_options = [1, 2, 3, 4, 5, 10, 15, 20, 25];
  useEffect(() => {
    console.log(URLgenres);
    axios
      .get(URLgenres, { params: { page, recordsPerPage } })
      .then((res: AxiosResponse<genreDTO[]>) => {
        console.log(res.data);
        const totalAmountOfRecords = parseInt(
          res.headers["totalamountofrecords"],
          10
        );
        console.log(res.headers);
        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
        setGenres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, recordsPerPage]);
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary " to="/genres/create">
        Create Genre
      </Link>
      <div className="mb-3">
        <label></label>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setPage(1);
            setRecordsPerPage(() => parseInt(e.target.value, 10));
          }}
          className="form-select"
          defaultValue={5}
        >
          {select_options?.map((el) => (
            <option value={+el}>{el}</option>
          ))}
        </select>
      </div>
      <Pagination
        totalAmountOfPages={totalAmountOfPages}
        currentPage={page}
        onChange={(newPage) => setPage(newPage)}
      />
      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {genres?.map((genre, genId) => (
              <tr key={genId}>
                <td>
                  <Link className="btn btn-success" to={`genres/${genre.id}`}>
                    Edit
                  </Link>
                  <Button className="btn btn-danger">Delete</Button>
                </td>
                <td>{genre.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
};

export default IndexGenres;
