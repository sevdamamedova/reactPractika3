import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ghange } from "./components/redux/reducer";
import { save } from "./components/redux/reducer";
import { del } from "./components/redux/reducer";
function App() {
  const { arr } = useSelector((state) => state.Data);
  const { val } = useSelector((state) => state.Data);
  const dispach = useDispatch();

  return (
    <>
      <input value={val} onChange={(e) => dispach(ghange(e.target.value))} type="text" />
      <button onClick={() => dispach(save())}>save</button>
      {arr?.map((a) => (
        <div key={a.id} style={{ display: "flex" }}>
          <p>{a.title}</p>
          <button onClick={() => dispach(del(a.id))}>Sil</button>
        </div>
      ))}
    </>
  );
}

export default App;
