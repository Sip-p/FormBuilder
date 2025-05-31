 

//%%%%%%%%%%%%%%%%%%%%%%%%%%%
 import React from 'react';
import { useFormStore } from '../../state/formStore';

const FieldPalette = () => {
  const formCreated = useFormStore((s) => s.formCreated); // ✅ Track if form is created

  const handleDrag = (e, fieldType) => {
    // ✅ Prevent dragging if form hasn't been created
    if (!formCreated) {
      alert("Please click 'Create Form' first!");
      e.preventDefault();
      return;
    }

    e.dataTransfer.setData("fieldType", fieldType);
  };

  // ✅ Updated field types with text styling options
  const FieldType = [
    { type: "text", label: "Text Field" },
    { type: "email", label: "Email" },
    { type: "number", label: "Number" },
    { type: "checkbox", label: "Checkbox" },
    { type: "radio", label: "Radio" },
    { type: "textarea", label: "Textarea" },
     
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white mb-2">Drag Fields</h3>

      {FieldType.map((field) => (
        <div
          key={field.type}
          draggable
          onDragStart={(e) => handleDrag(e, field.type)}
          className={`bg-gray-700 p-2 rounded text-white cursor-move ${
            formCreated ? "hover:bg-gray-600" : "opacity-50 cursor-not-allowed"
          }`}
        >
          {field.label}
        </div>
      ))}
    </div>
  );
};

export default FieldPalette;


  