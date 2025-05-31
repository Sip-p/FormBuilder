// app/components/config/ValidationSettings.jsx
import React from "react";

const ValidationSettings = ({ field, onChange }) => {
  // Extract validations or default empty
  const validations = field.validations || {};

  const toggleRequired = () => {
    if (validations.required) {
      const newValidations = { ...validations };
      delete newValidations.required;
      onChange({ validations: newValidations });
    } else {
      onChange({ validations: { ...validations, required: true } });
    }
  };

  const onMinLengthChange = (e) => {
    const val = e.target.value;
    const newValidations = { ...validations };
    if (val === "") {
      delete newValidations.minLength;
    } else {
      newValidations.minLength = Number(val);
    }
    onChange({ validations: newValidations });
  };

  return (
    <div>
      <h4 className="font-semibold mb-2">Validations</h4>

      <label className="flex items-center space-x-2 mb-3">
        <input
          type="checkbox"
          checked={!!validations.required}
          onChange={toggleRequired}
        />
        <span>Required</span>
      </label>

      <label className="block mb-3">
        <span className="block mb-1">Min Length</span>
        <input
          type="number"
          min="0"
          value={validations.minLength || ""}
          onChange={onMinLengthChange}
          className="w-full border rounded px-2 py-1"
          placeholder="Leave empty for none"
        />
      </label>

      {/* Add more validations as needed (maxLength, pattern, etc.) */}
    </div>
  );
};

export default ValidationSettings;
