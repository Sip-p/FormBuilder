// app/components/config/FieldSettings.jsx
import React from "react";

const FieldSettings = ({ field, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-1">Label</label>
      <input
        type="text"
        value={field.label || ""}
        onChange={(e) => onChange({ label: e.target.value })}
        className="w-full border rounded px-2 py-1"
      />

      <label className="block font-medium mt-4 mb-1">Placeholder</label>
      <input
        type="text"
        value={field.placeholder || ""}
        onChange={(e) => onChange({ placeholder: e.target.value })}
        className="w-full border rounded px-2 py-1"
      />

      {/* Add defaultValue input if relevant for your field types */}
    </div>
  );
};

export default FieldSettings;
