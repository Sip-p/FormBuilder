import React, { useState,useEffect } from "react";
import { useFormStore } from "../../state/formStore";
import { useNavigate } from "@remix-run/react";''
const SaveLoadButtons = () => {
  const saveFormLocally = useFormStore((s) => s.saveFormLocally);
  const loadFormById = useFormStore((s) => s.loadFormById);
  const [formId, setFormId] = useState("");
const navigate=useNavigate();
useEffect(() => {
  console.log("✅ SaveLoadButtons component mounted>>>>!");
}, []);
// const handleLoad = () => {
//   if (formId.trim()) {
//     console.log("handleLoad function triggered"); // ✅ Debugging check
//     console.log("Navigating to:", `/fill/${formId.trim()}`);
//     console.log("mmm")
//     navigate(`/fill/${formId.trim()}`);
//   } else {
//     console.log("Error: Form ID input is empty!");
//   }

// };
  
const handleLoad = () => {
  if (formId.trim()) {
    console.log("handleLoad function triggered"); 
    console.log("Navigating to:", `/fill/${formId.trim()}`);
    
    try {
      navigate(`/fill/${formId.trim()}`); //  
      console.log("✅ Navigation triggered successfully!");
    } catch (error) {
      console.error("❌ Navigation failed:", error);
    }
  } else {
    console.log("Error: Form ID input is empty!");
  }
};

return (
    <div className="flex items-center space-x-4 my-4">
      <button
        onClick={saveFormLocally}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Form
      </button>
      <input
        type="text"
        value={formId}
        onChange={(e) => setFormId(e.target.value)}
        placeholder="Enter Form ID Only"
        className="border px-2 py-1 rounded"
      />
     <button
  onClick={() => {
    console.log("✅ Button was clicked! Calling handleLoad...");
    handleLoad();
  }}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Load Form
</button>
    </div>
  );
};

export default SaveLoadButtons;