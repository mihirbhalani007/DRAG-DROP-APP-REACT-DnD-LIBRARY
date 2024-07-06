import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DragItem from "./components/DragItem";
import DropZone from "./components/DropZone";

function App() {
  // Generate initial items
  const initialItems = Array.from({ length: 20 }, () =>
    faker.internet.userName()
  );
  const [items, setItems] = useState(initialItems);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (droppedItem) => {
    console.log("Dropped item:", droppedItem);
    setItems((prevItems) =>
      prevItems.filter((item) => item !== droppedItem.name)
    );
    setDroppedItems((prevItems) => [...prevItems, droppedItem]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="border-solid border-2 border-black max-h-dvh flex">
        <div className="border-solid border-2  w-1/2">
          <div className="flex flex-wrap">
            {items.map((name, index) => (
              <DragItem key={index} name={name} />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <DropZone onDrop={handleDrop} />
          <div className="flex flex-wrap">
            {droppedItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-solid border-gray-300 p-2 rounded m-2 bg-blue-200 w-32 h-16 flex justify-center items-center"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
