const EventHandling = () => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", event.currentTarget);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", event.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Click Me</h2>
      <button onSubmit={handleSubmit}>Click</button>
    </div>
  );
};

export default EventHandling;
