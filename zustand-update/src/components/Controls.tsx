import { useCounterStore } from "../store/counterStore";

function Controls() {
  const { decrease, increase, reset } = useCounterStore((state) => state);
  return (
    <div>
      Controls
      <div>
        <button onClick={decrease}>Decrement</button>
        <button onClick={increase}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Controls;
