import { episodeList } from "./data.js";
import { useState } from "react";

export default function App() {
  const [episodes] = useState(episodeList);
  const [chosenEpisode, setChosenEpisode] = useState();
  // TODO

  function EpisodeInfo() {
    if (!chosenEpisode) {
      return (
        <div className="information">
          <h2>Episode Details</h2>
          <p>Select an episode for the description</p>
        </div>
      );
    }
    return (
      <div className="information">
        <h2>{chosenEpisode.title}</h2>
        <p>This is episode {chosenEpisode.id} in the season</p>
        <p>{chosenEpisode.description}</p>
      </div>
    );
  }

  function List() {
    return (
      <div className="list">
        <h2>Current Episode List</h2>
        <ul className="list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setChosenEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <List />
        <EpisodeInfo />
      </main>
    </>
  );
}

// function App() {
//   const [episodeDisplay, setEpisodeDisplay] = useState([]);
// }

// const displayAllEpisodes = (element) => {
//   setEpisodeDisplay(element);
// };
// console.log(displayAllEpisodes);
// return (
//   <>
//     {episodeList.map((element) => {
//       return (
//         <div className="display">
//           <h1>{element.title}</h1>
//           <p>{element.description}</p>

//         </div>
//       );
//     })}
//   </>
// );

// export default function App() {
//   console.log(episodeList);
//   // TODO
// }
