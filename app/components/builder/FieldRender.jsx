 


import { useState } from "react";
import { useFormStore } from "../../state/formStore";

const FieldRender = ({ fields }) => {
  const { values, updateFieldValue } = useFormStore();
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let errorMessage = "";

    if (field.required && !value) {
      errorMessage = "This field is required.";
    }
    if (field.minLength && value.length < field.minLength) {
      errorMessage = `Minimum ${field.minLength} characters required.`;
    }
    if (field.maxLength && value.length > field.maxLength) {
      errorMessage = `Maximum ${field.maxLength} characters allowed.`;
    }
    if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = "Invalid email format.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field.id]: errorMessage,
    }));
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-4">
      {fields.length === 0 ? (
        <p className="text-gray-600 text-center">No fields added yet.</p>
      ) : (
        fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label className="font-semibold">{field.label}</label>

         
            {field.type === "file" && (
              <input
                type="file"
                className="border rounded px-3 py-2 w-full"
                onChange={(e) => updateFieldValue(field.id, e.target.files[0])}
              />
            )}

            
            {field.type === "textarea" && (
              <textarea
                className="border rounded px-3 py-2 w-full"
                rows="4"
                placeholder={field.placeholder}
                value={values[field.id] || ""}
                onChange={(e) => {
                  updateFieldValue(field.id, e.target.value);
                  validateField(field, e.target.value);
                }}
              />
            )}

            
            {["text", "email", "number", "checkbox"].includes(field.type) && (
              <input
                type={field.type}
                className="border rounded px-3 py-2 w-full"
                placeholder={field.placeholder}
                required={field.required}
                value={values[field.id] || ""}
                onChange={(e) => {
                  updateFieldValue(field.id, e.target.value);
                  validateField(field, e.target.value);
                }}
              />
            )}

            {errors[field.id] && <p className="text-red-500 text-sm">{errors[field.id]}</p>}
          </div>
        ))
      )}
    </form>
  );
};

export default FieldRender;