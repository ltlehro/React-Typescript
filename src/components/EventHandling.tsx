const EventHandling = () => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", event.currentTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", event.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Hover</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default EventHandling;
