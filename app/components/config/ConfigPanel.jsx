import React from "react";
import { useFormStore } from "../../state/formStore";
const ConfigPanel = () => {
  const selectedField = useFormStore((s) => s.getSelectedField());
  const updateField = useFormStore((s) => s.updateField);

  if (!selectedField) return <p className="text-white">No field selected</p>;

  const handleChange = (e) => {
    updateField(selectedField.id, { [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 space-y-4 text-white">
      <h3 className="text-lg font-bold">Field Settings</h3>

      <div>
        <label className="block text-sm">Label</label>
        <input
          name="label"
          value={selectedField.label}
          onChange={handleChange}
          className="p-2 w-full text-black"
        />
      </div>

      <div>
        <label className="block text-sm">Placeholder</label>
        <input
          name="placeholder"
          value={selectedField.placeholder || ""}
          onChange={handleChange}
          className="p-2 w-full text-black"
        />
      </div>
    </div>
  );
};

export default ConfigPanel;
