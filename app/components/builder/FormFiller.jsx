 



import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import FieldRender from "../components/builder/FieldRender";
import { useFormStore } from "../state/formStore";  

export default function FormFiller() {
  const { formId } = useParams();
  const { values, updateFieldValue } = useFormStore();  
  const [fields, setFields] = useState([]);
  const [formName, setFormName] = useState("");

  useEffect(() => {
    console.log("FormFiller Mounted - Form ID:", formId);
    const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};

    if (savedForms[formId]) {
      console.log("Loading fields for Form ID:", formId, savedForms[formId].fields);
      setFields(savedForms[formId].fields ?? []);
      setFormName(savedForms[formId].formName ?? "Untitled Form");
    } else {
      console.log("Error: No form found for this ID:", formId);
      setFields([]);
      setFormName("Form Not Found");
    }
  }, [formId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">{formName}</h2>

        {fields.length === 0 ? (
          <p className="text-red-500 text-center">⚠ Form not found. Please check the ID.</p>
        ) : (
          <>
             <div className="space-y-4">
              {fields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label className="font-semibold">{field.label}</label>

                   {field.type === "radio" && (
                    <div className="flex flex-wrap gap-2">
                      {field.options?.map((option, index) => (
                        <label key={index} className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded">
                          <input
                            type="radio"
                            name={field.id}
                            value={option}
                            checked={values[field.id] === option}
                            onChange={(e) => updateFieldValue(field.id, e.target.value)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}

                   {field.type !== "radio" && (
                    <input
                      type={field.type}
                      value={values[field.id] || ""}
                      onChange={(e) => updateFieldValue(field.id, e.target.value)}
                      className="border rounded px-3 py-2 w-full"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>

             
            <div className="text-center mt-6">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all w-full">
                ✅ Submit Form
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}