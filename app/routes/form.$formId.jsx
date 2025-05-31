// import { useParams } from "@remix-run/react";
// import { useEffect } from "react";
// import { useFormStore } from "../state/formStore";

// export default function FormFiller() {
//   const { formId } = useParams();
//   const loadFormById = useFormStore((s) => s.loadFormById);
//   const fields = useFormStore((s) => s.fields);

//   useEffect(() => {
//     if (formId) {
//       loadFormById(formId);
//     }
//   }, [formId]);

//   return (
//     <div>
//       <h2>Fill Form (ID: {formId})</h2>
//       {fields.map((field) => (
//         <div key={field.id}>
//           <label>{field.label}</label>
//           <input type={field.type} required={field.required} />
//         </div>
//       ))}
//       <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
//     </div>
//   );
// }


import { useParams } from "@remix-run/react";
import { useEffect } from "react";
import { useFormStore } from "../state/formStore"; // Ensure correct import path
export default function FormFiller() {
  const { formId } = useParams(); // Get Form ID from URL
  const loadFormById = useFormStore((s) => s.loadFormById);
  const fields = useFormStore((s) => s.fields)

  useEffect(() => {
    if (formId) {
      loadFormById(formId);
    }
  }, [formId]);

  return fields.length > 0 ? (
    <div>
      <h2>Fill Form (ID: {formId})</h2>
      {fields.map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input type={field.type} required={field.required} />
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  ) : (
    <p>Loading form...</p>
  );
}