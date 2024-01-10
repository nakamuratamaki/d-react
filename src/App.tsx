import "./index.css";
import { Animal } from "./Animal";
import { animals } from "./data";
import { useState } from "react";

function App() {
  const [hiddenIndex, setHiddenIndex] = useState(0);
  if (animals.length === 0) {
    return <p>動物はいません</p>;
  }
  return (
    <div>
      <p>{hiddenIndex + 1}番目を隠しています</p>
      <button
        disabled={hiddenIndex === 0}
        onClick={() => {
          setHiddenIndex(hiddenIndex - 1);
        }}
      >
        ←戻る
      </button>
      <button
        disabled={hiddenIndex === animals.length - 1}
        onClick={() => {
          setHiddenIndex(hiddenIndex + 1);
        }}
      >
        次→
      </button>
      <ul>
        {animals
          .filter((animal, index) => {
            return index !== hiddenIndex;
          })
          .map((animal) => {
            return (
              <li className="list-none">
                <Animal name={animal.name} imgUrl={animal.imgUrl} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
