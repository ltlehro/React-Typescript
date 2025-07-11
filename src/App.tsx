import { Suspense } from "react";
import UseHook from "./components/UseHook";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UseHook />
    </Suspense>
  );
};

export default App;
