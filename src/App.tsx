import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button label="button" onClick={() => console.log("clicked")} disabled=false />
    </div>
  );
};

export default App;
