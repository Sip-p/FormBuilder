 


import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import FieldWrapper from "./FieldWrapper";

const DraggableField = ({ field }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: field.id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <FieldWrapper field={field} dragHandleProps={{ ...listeners, ...attributes }} />
    </div>
  );
};

export default DraggableField;