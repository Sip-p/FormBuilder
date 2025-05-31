import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import FieldRender from "../components/builder/FieldRender";
import { useFormStore } from "../state/formStore";

export default function EditForm() {
  const { formId } = useParams();
  const { fields, setFields, saveFormLocally } = useFormStore();
  const [formName, setFormName] = useState("");

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
    if (savedForms[formId]) {
      setFields(savedForms[formId].fields || []);
      setFormName(savedForms[formId].formName || "Untitled Form");
    }
  }, [formId, setFields]);

  const handleSaveChanges = () => {
    saveFormLocally();
    alert("✅ Form updated successfully!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">✏️ Editing {formName}</h2>

      <FieldRender fields={fields} />

      <div className="text-center mt-6">
        <button onClick={handleSaveChanges} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all w-full">
          ✅ Save Changes
        </button>
      </div>
    </div>
  );
}