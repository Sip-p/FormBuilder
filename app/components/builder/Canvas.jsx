import React from "react";
import { useFormStore } from "../../state/formStore";

const Canvas = () => {
  const fields = useFormStore((s) => s.fields);
  const selectedId = useFormStore((s) => s.selectedFieldId);
  const setSelectedField = useFormStore((s) => s.setSelectedField);

  return (
    <div className="space-y-4">
      {fields.length === 0 && (
        <p className="text-gray-600 italic">Add fields to start building...</p>
      )}

      {fields.map((field) => (
        <div
          key={field.id}
          onClick={() => setSelectedField(field.id)}
          className={`p-3 border rounded cursor-pointer ${
            field.id === selectedId ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <label className="block font-medium mb-1">{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              className="w-full border px-2 py-1"
              placeholder={field.placeholder}
              disabled
            />
          ) : field.type === "checkbox" || field.type === "radio" ? (
            <div className="flex items-center gap-2">
              <input type={field.type} disabled />
              <span>{field.label}</span>
            </div>
          ) : (
            <input
              type={field.type}
              className="w-full border px-2 py-1"
              placeholder={field.placeholder}
              disabled
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
