import { Link } from "react-router-dom";

const IndexActors = () => {
  return (
    <>
      <h3>Actors</h3>
      <Link className="btn btn-primary " to="/actors/create">
        Create Actors
      </Link>
    </>
  );
};

export default IndexActors;
