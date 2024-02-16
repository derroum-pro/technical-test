import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayersAndMatches } from "./store/thunks/combinedThunk";
import { getPlayersWithDetails } from "./store/slices/combinedSlice";
import { PlayerCard } from "./components/PlayerCard/PlayerCard";

function App() {
  const { playersWithDetails } = useSelector(getPlayersWithDetails);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchPlayersAndMatches());
  }, [dispatch]);

  return playersWithDetails.length ? (
    <div className="App">
      <header className="flex w-full bg-blue-400 h-16 p-auto items-center justify-center">
        <h1 className="font-bold text-2xl text-white">Players</h1>
      </header>
      <div className="flex gap-4 flex-wrap justify-center">
        {playersWithDetails.map((player) => (
          <div>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default App;
