import { useDrag } from "react-dnd";

function DragItem({ name }) {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "item",
      item: { name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name]
  );

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        margin: "5px",
        backgroundColor: "lightblue",
        width: "150px", // Adjust width as needed
        height: "75px", // Adjust height as needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name}
    </div>
  );
}

export default DragItem;
