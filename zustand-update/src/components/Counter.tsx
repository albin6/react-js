import { useCounterStore } from "../store/counterStore";

function Counter() {
  const count = useCounterStore((state) => state.count);
  return <div>Counter {count}</div>;
}

export default Counter;
