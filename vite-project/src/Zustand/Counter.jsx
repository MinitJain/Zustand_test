import { useStore } from "./Store";

// const { count, increase, decreasse } = useStore();

export default function Counter() {
  const count = useStore((state) => state.count); // (selector)

  // Get actions
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const reset = useStore((state) => state.reset);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
