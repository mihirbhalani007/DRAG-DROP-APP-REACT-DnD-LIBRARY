import React from "react";
import { useDrop } from "react-dnd";

function DropZone({ onDrop }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "item",
    drop: (item) => {
      console.log("Item dropped in DropZone:", item);
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className="w-full h-full"
      style={{
        border: `1px dashed ${isOver ? "green" : "black"}`,
        // padding: "10px",
        // marginTop: "10px",
      }}
    >
      Drop here
    </div>
  );
}

export default DropZone;
