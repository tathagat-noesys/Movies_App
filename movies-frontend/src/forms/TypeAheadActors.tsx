import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actorsmodel";

const TypeAheadActors = (props: typeAheadActorsProps) => {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Tom Cruise",
      character: "Ethan Hunt",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg",
    },
    {
      id: 2,
      name: "Bradd Pitt",
      character: "Tyler Durden",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
    },
    {
      id: 3,
      name: "Cilian Murphy",
      character: "Thomas Shelby",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cillian_Murphy-2014.jpg/330px-Cillian_Murphy-2014.jpg",
    },
  ];
  return (
    <div className="mb-3">
      <label htmlFor="typeahead">{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(actor) => console.log(actor)}
        options={actors}
        labelKey={"name"}
        filterBy={["name"]}
        placeholder="Write the name of the actor here..."
        minLength={1}
        renderMenuItemChildren={(options) => (
          <div key={options.name}>
            <img
              src={options.picture}
              style={{ width: "32px", height: "32px", marginRight: "10px" }}
            />
            {options.name}
          </div>
        )}
      />
    </div>
  );
};

export default TypeAheadActors;

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
}
