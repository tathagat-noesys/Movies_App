// // import { Typeahead } from "react-bootstrap-typeahead";
// // import { actorMovieDTO } from "../actors/actorsmodel";

// // const TypeAheadActors = (props: typeAheadActorsProps) => {
// //   const actors: actorMovieDTO[] = [
// //     {
// //       id: 1,
// //       name: "Tom Cruise",
// //       character: "Ethan Hunt",
// //       picture:
// //         "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg",
// //     },
// //     {
// //       id: 2,
// //       name: "Bradd Pitt",
// //       character: "Tyler Durden",
// //       picture:
// //         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
// //     },
// //     {
// //       id: 3,
// //       name: "Cilian Murphy",
// //       character: "Thomas Shelby",
// //       picture:
// //         "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cillian_Murphy-2014.jpg/330px-Cillian_Murphy-2014.jpg",
// //     },
// //   ];
// //   return (
// //     <div className="mb-3">
// //       <label htmlFor="typeahead">{props.displayName}</label>
// //       <Typeahead
// //         id="typeahead"
// //         onChange={(actors) => {
// //           console.log(props.actors, "here");
// //           console.log(actors);

// //           if (!props.actors.find((x) => x.id == actors[0].id)) {
// //             props.onAdd([...props.actors, actors[0]]);
// //           }
// //         }}
// //         options={actors}
// //         labelKey={"name"}
// //         filterBy={["name"]}
// //         placeholder="Write the name of the actor here..."
// //         minLength={1}
// //         renderMenuItemChildren={(actor) => (
// //           <div key={actor.name}>
// //             <img
// //               src={actor.picture}
// //               style={{ width: "32px", height: "32px", marginRight: "10px" }}
// //             />
// //             <span>{actor.name}</span>
// //           </div>
// //         )}
// //         flip={true}
// //       />
// //       <ul className="list-group">
// //         {props.actors?.map((el, ind) => (
// //           <li key={ind}>{el.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TypeAheadActors;

// // interface typeAheadActorsProps {
// //   displayName: string;
// //   actors: actorMovieDTO[];
// //   onAdd(actors: actorMovieDTO[]): void;
// // }

// import React, { useState } from "react";
// import { Typeahead } from "react-bootstrap-typeahead";
// import { actorMovieDTO } from "../actors/actorsmodel";
// import css from "./TypeAheadActors.model.css";
// const TypeAheadActors = (props: TypeAheadActorsProps) => {
//   const actors: actorMovieDTO[] = [
//     {
//       id: 1,
//       name: "Tom Cruise",
//       character: "Ethan Hunt",
//       picture:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg",
//     },
//     {
//       id: 2,
//       name: "Bradd Pitt",
//       character: "Tyler Durden",
//       picture:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
//     },
//     {
//       id: 3,
//       name: "Cilian Murphy",
//       character: "Thomas Shelby",
//       picture:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cillian_Murphy-2014.jpg/330px-Cillian_Murphy-2014.jpg",
//     },
//   ];
//   const [selectedActor, setSelectedActor] = useState<actorMovieDTO[]>([]);
//   const [inputValue, setInputValue] = useState<string>("");

//   const handleInputChange = (value: string) => {
//     setInputValue(value);
//   };

//   const handleActorSelect = (actors: actorMovieDTO[]) => {
//     if (actors.length > 0) {
//       const selected = actors[0];
//       if (!props.actors.find((actor) => actor.id === selected.id)) {
//         props.onAdd([...props.actors, selected]);
//       }
//       setInputValue("");
//     }
//   };

//   return (
//     <div className="mb-3">
//       <label htmlFor="typeahead">{props.displayName}</label>
//       <Typeahead
//         id="typeahead"
//         onChange={handleActorSelect}
//         onInputChange={handleInputChange}
//         options={actors}
//         labelKey="name"
//         filterBy={["name"]}
//         placeholder="Write the name of the actor here..."
//         minLength={1}
//         selected={selectedActor}
//         renderMenuItemChildren={(actor) => (
//           <div key={actor.name}>
//             <img
//               src={actor.picture}
//               style={{ width: "32px", height: "32px", marginRight: "10px" }}
//               alt={actor.name}
//             />
//             <span>
//               {actor.name} - acted as - {actor.character}
//             </span>
//           </div>
//         )}
//         flip={true}
//       />
//       <ul className="list-group">
//         {props.actors?.map((actor, ind) => (
//           <li key={ind}>
//             {props.listUI(actor)}
//             <span
//               className={`badge badge-primary badge-pill tex-dark`}
//               onClick={() => props.onRemove(actor)}
//               style={{ marginLeft: "0.5rem" }}
//             >
//               {" "}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TypeAheadActors;

// interface TypeAheadActorsProps {
//   displayName: string;
//   actors: actorMovieDTO[];
//   onAdd(actors: actorMovieDTO[]): void;
//   listUI(actor: actorMovieDTO): React.ReactElement;
//   onRemove(actor: actorMovieDTO): void;
// }

//!

import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actorsmodel";

const TypeAheadActors = (props: TypeAheadActorsProps) => {
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

  const [selectedActor, setSelectedActor] = useState<actorMovieDTO[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleActorSelect = (actors: actorMovieDTO[]) => {
    if (actors.length > 0) {
      const selected = actors[0];
      if (!props.actors.find((actor) => actor.id === selected.id)) {
        props.onAdd([...props.actors, selected]);
      }
      setInputValue("");
    }
  };

  const handleRemove = (actor: actorMovieDTO) => {
    const updatedActors = props.actors.filter((a) => +a.id !== +actor.id);
    props.onRemove(updatedActors);
  };

  return (
    <div className="mb-3">
      <label htmlFor="typeahead">{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={handleActorSelect}
        onInputChange={handleInputChange}
        options={actors}
        labelKey="name"
        filterBy={["name"]}
        placeholder="Write the name of the actor here..."
        minLength={1}
        selected={selectedActor}
        renderMenuItemChildren={(actor) => (
          <div key={actor.name}>
            <img
              src={actor.picture}
              style={{ width: "32px", height: "32px", marginRight: "10px" }}
              alt={actor.name}
            />
            <span>
              {actor.name} - acted as - {actor.character}
            </span>
          </div>
        )}
        flip={true}
      />
      <ul className="list-group">
        {props.actors?.map((actor, ind) => (
          <li
            key={ind}
            className="list-group-item d-flex justify-content-between"
          >
            {props.listUI(actor)}
            <span
              className="badge badge-primary badge-pill text-dark"
              onClick={() => handleRemove(actor)}
              style={{ cursor: "pointer" }}
            >
              ✖️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypeAheadActors;

interface TypeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]): void;
  listUI(actor: actorMovieDTO): React.ReactElement;
  onRemove(actors: actorMovieDTO[]): void;
}
