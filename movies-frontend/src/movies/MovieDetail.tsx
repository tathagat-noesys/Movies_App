import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { URLmovies } from "../Endpoints";
import { moviesDTO } from "./movies.model";
import ReactMarkdown from "react-markdown";
import Loading from "../utils/Loading";
import Map from "../utils/Map";
import coordinateDTO from "./coordinates.model";
import DisplayErrors from "../utils/DisplayError";
import Button from "../utils/Button";
import cssStyles from "./MovieDetails.module.css";
import { useAdminAuthContext } from "../Admin/AuthContext";
export default function MovieDetails() {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const [movie, setMovie] = useState<moviesDTO>();
  const [errors, setErrors] = useState<string[]>([]);
  const adminContext = useAdminAuthContext();
  console.log(adminContext?.adminAuth);
  useEffect(() => {
    axios
      .get(`${URLmovies}/${id}`)
      .then((response: AxiosResponse<moviesDTO>) => {
        response.data.releaseDate = new Date(response.data.releaseDate);

        setMovie(response.data);
      })
      .catch((err) => {
        if (err.response.data.status == 404) {
          setErrors(["Resource Not Found in the Database"]);
        }
      });
  }, [id]);
  // console.log(movie);
  function transformCoordinates(): coordinateDTO[] {
    if (movie?.movieTheaters) {
      const coordinates = movie.movieTheaters.map((movieTheater) => {
        return {
          lat: movieTheater.latitude,
          lng: movieTheater.longitude,
          name: movieTheater.name,
        } as coordinateDTO;
      });

      return coordinates;
    }

    return [];
  }

  function generateEmbeddedVideoURL(trailer: string): string {
    if (!trailer) {
      return "";
    }

    if (trailer.includes("/embed")) {
      return trailer;
    }

    return `${trailer}`;
  }

  if (errors.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DisplayErrors errors={errors} font="25px" />
      </div>
    );
  }

  function deleteMovie(id: number) {
    console.log(`${URLmovies}/${id}`);
    axios
      .delete(`${URLmovies}/${id}`)
      .then((res: AxiosResponse<object>) => {
        alert(`${movie?.title} deleted successfully`);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return movie ? (
    <div style={{ textAlign: "center" }}>
      <h2>
        {movie.title} ({movie.releaseDate.getFullYear()})
      </h2>
      {movie.genres?.map((genre) => (
        <Link
          key={genre.id}
          style={{ marginRight: "5px" }}
          className="btn btn-primary btn-sm rounded-pill"
          to={`/movies/filter?genreId=${genre.id}`}
        >
          {genre.name}
        </Link>
      ))}{" "}
      | {movie.releaseDate.toDateString()}
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            marginRight: "1rem",
            textAlign: "center",
          }}
        >
          <img
            src={movie.poster}
            style={{ width: "350px", height: "315px" }}
            alt="poster"
          />
        </span>
        {movie.trailer ? (
          <div>
            <iframe
              title="youtube-trailer"
              width="640"
              height="315"
              src={generateEmbeddedVideoURL(movie.trailer)}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>
      {movie.summary ? (
        <div style={{ marginTop: "1rem" }}>
          <h3>Summary</h3>
          <div style={{ padding: " 0px 50px" }}>
            <ReactMarkdown>{movie.summary}</ReactMarkdown>
          </div>
        </div>
      ) : null}
      {movie.actors && movie.actors.length > 0 ? (
        <div style={{ marginTop: "1rem" }}>
          <h3>Actors</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid blue",
              padding: "30px",
            }}
          >
            {movie.actors?.map((actor) => (
              <div
                key={actor.id}
                style={{
                  marginBottom: "2px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  padding: "20px",
                  width: "200px",
                  borderRadius: "5px",
                }}
              >
                <img
                  alt="pic"
                  src={actor.picture}
                  style={{
                    width: "90px",
                    height: "60px",
                    verticalAlign: "middle",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "200px",
                      marginLeft: "1rem",
                    }}
                  >
                    {actor.name}{" "}
                  </span>
                  <span> as </span>
                  <span>{actor.character}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {movie.movieTheaters && movie.movieTheaters.length > 0 ? (
        <div>
          <h2>Showing on</h2>
          <ol style={{ display: "flex", justifyContent: "space-evenly" }}>
            {movie &&
              movie.movieTheaters?.map((theaters, id) => (
                <li key={id}>
                  <h6>{theaters.name}</h6>
                </li>
              ))}
          </ol>
          <Map
            coordinates={transformCoordinates()}
            readOnly={true}
            handleMapClick={() => console.log(1)}
          />

          {adminContext?.adminAuth ? (
            <>
              {" "}
              <Link to={`/movies/edit/${id}`}>
                <Button className={`btn btn-dark ${cssStyles["edit-button"]}`}>
                  Edit Movie
                </Button>
              </Link>
              <Button
                onClick={() => deleteMovie(id)}
                className={`btn btn-dark ${cssStyles["edit-button"]}`}
              >
                Delete Movie
              </Button>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  ) : (
    <Loading />
  );
}
