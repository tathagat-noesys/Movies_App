import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { genreDTO } from "./genres.model";
import { URLgenres } from "../Endpoints";
import GenericList from "../utils/GenericListComponen";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";

const IndexGenres = () => {
  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState<number>(0);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

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
      <RecordsPerPageSelect
        setPage={setPage}
        setRecordsPerPage={setRecordsPerPage}
      />
      <Pagination
        totalAmountOfPages={totalAmountOfPages}
        currentPage={page}
        onChange={(newPage) => setPage(newPage)}
      />
      <GenericList list={genres}>
        <table className="table table-border table-dark table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
            </tr>
          </thead>

          <tbody>
            {genres?.map((genre, genId) => (
              <tr key={genId} className="table-light ">
                <td scope="row">
                  <Link className="btn btn-dark" to={`genres/${genre.id}`}>
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
