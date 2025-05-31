// import { useParams } from "@remix-run/react";
// import { useEffect, useState } from "react";
// import FieldRender from "../components/builder/FieldRender";

// export default function FillForm() {
//   const { formId } = useParams();
//   const [fields, setFields] = useState([]);

//   useEffect(() => {
//     const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//     if (savedForms[formId]) {
//       setFields(savedForms[formId].fields || []);
//     } else {
//       setFields([]);
//     }
//   }, [formId]);

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-semibold mb-4"> </h2>
//       {fields.length === 0 ? (
//         <p>Form not found.</p>
//       ) : (
//         <FieldRender fields={fields} />
//       )}
//     </div>
//   );
// }



import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import FieldRender from "../components/builder/FieldRender";

export default function FillForm() {
  const { formId } = useParams();
  const [fields, setFields] = useState([]);
  const [formName, setFormName] = useState(""); // ✅ Track Form Name

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
    
    if (savedForms[formId]) {
      setFields(savedForms[formId].fields || []);
      setFormName(savedForms[formId].formName || "Untitled Form"); // ✅ Load Form Name
    } else {
      setFields([]);
      setFormName("Form Not Found");
    }
  }, [formId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        {/* ✅ Display Form Name as Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{formName}</h2>

        {fields.length === 0 ? (
          <p className="text-red-500 text-center">⚠ Form not found. Please check the ID.</p>
        ) : (
          <>
            {/* ✅ Better Form Layout */}
            <div className="space-y-4">
              <FieldRender fields={fields} />
            </div>

            {/* ✅ Submit Button Styling */}
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