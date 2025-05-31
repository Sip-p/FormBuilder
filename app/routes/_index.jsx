// // import React, { useState } from "react";
// // import BuilderLayout from "../components/layout/BuilderLayout";
// // import DragDropArea from "../components/builder/DragDropArea";
// // import StepManager from "../components/builder/StepManager";
// // import ResponseTable from "../components/responses/ResponseTable";
// // import TemplateLoader from "../components/builder/TemplateLoader";
// // import SaveOptions from "../components/builder/SaveOptions"; // ✅ Import SaveOptions

// // export default function Index() {
// //   const [mode, setMode] = useState("builder"); // builder or preview
// //   const [previewTab, setPreviewTab] = useState("form"); // form or responses

// //   return (
// //     <BuilderLayout>
// //       {/* Mode Toggle Buttons */}
// //       <div className="flex gap-2 mb-4">
// //         <button
// //           onClick={() => setMode("builder")}
// //           className={`px-4 py-2 rounded ${mode === "builder" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
// //         >
// //           Builder
// //         </button>
// //         <button
// //           onClick={() => setMode("preview")}
// //           className={`px-4 py-2 rounded ${mode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
// //         >
// //           Preview
// //         </button>
// //       </div>

// //       {/* Show Template Loader & Save Options in Builder Mode */}
// //       {mode === "builder" && (
// //         <>
// //           <TemplateLoader />
// //           <SaveOptions /> {/* ✅ Show SaveOptions in Builder Mode */}
// //         </>
// //       )}

// //       {/* Conditional Rendering */}
// //       {mode === "builder" ? (
// //         <DragDropArea />
// //       ) : (
// //         <div>
// //           {/* Preview Tabs */}
// //           <div className="flex gap-2 mb-4">
// //             <button
// //               onClick={() => setPreviewTab("form")}
// //               className={`px-4 py-2 rounded ${previewTab === "form" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
// //             >
// //               Form Preview
// //             </button>
// //             <button
// //               onClick={() => setPreviewTab("responses")}
// //               className={`px-4 py-2 rounded ${previewTab === "responses" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
// //             >
// //               Responses
// //             </button>
// //           </div>
// //           {previewTab === "form" ? <StepManager /> : <ResponseTable />}
// //         </div>
// //       )}
// //     </BuilderLayout>
// //   );
// // }



//  import React, { useState } from "react";
// import BuilderLayout from "../components/layout/BuilderLayout";
// import DragDropArea from "../components/builder/DragDropArea";
// import StepManager from "../components/builder/StepManager";
// import ResponseTable from "../components/responses/ResponseTable";
// import TemplateLoader from "../components/builder/TemplateLoader";
// import SaveOptions from "../components/builder/SaveOptions"; // ✅ Import SaveOptions
// import SaveLoadButtons from "../components/builder/SaveLoadButton"; // ✅ Import SaveLoadButtons
// import { useEffect } from "react";
// import { useFormStore } from "../state/formStore"; // Ensure correct import path
// import { useNavigate } from "@remix-run/react";
// export default function Index() {
//   const [mode, setMode] = useState("builder"); // builder or preview
//   const [previewTab, setPreviewTab] = useState("form"); // form or responses

//   return (
//     <BuilderLayout>
//       {/* Mode Toggle Buttons */}
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={() => setMode("builder")}
//           className={`px-4 py-2 rounded ${mode === "builder" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Builder
//         </button>
//         <button
//           onClick={() => setMode("preview")}
//           className={`px-4 py-2 rounded ${mode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Preview
//         </button>
//       </div>

//       {/* Show Template Loader, Save Options & Save/Load Buttons in Builder Mode */}
//       {mode === "builder" && (
//         <>
//           <TemplateLoader />
//           <SaveOptions /> {/* ✅ Show SaveOptions in Builder Mode */}
//           <SaveLoadButtons /> {/* ✅ Added SaveLoadButtons */}
//         </>
//       )}

//       {/* Conditional Rendering */}
//       {mode === "builder" ? (
//         <DragDropArea />
//       ) : (
//         <div>
//           {/* Preview Tabs */}
//           <div className="flex gap-2 mb-4">
//             <button
//               onClick={() => setPreviewTab("form")}
//               className={`px-4 py-2 rounded ${previewTab === "form" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               Form Preview
//             </button>
//             <button
//               onClick={() => setPreviewTab("responses")}
//               className={`px-4 py-2 rounded ${previewTab === "responses" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               Responses
//             </button>
//           </div>
//           {previewTab === "form" ? <StepManager /> : <ResponseTable />}
//         </div>
//       )}
//     </BuilderLayout>
//   );
// }



//  import React, { useState } from "react";
// import BuilderLayout from "../components/layout/BuilderLayout";
// import DragDropArea from "../components/builder/DragDropArea";
// import StepManager from "../components/builder/StepManager";
// import ResponseTable from "../components/responses/ResponseTable";
// import TemplateLoader from "../components/builder/TemplateLoader";
// import SaveOptions from "../components/builder/SaveOptions"; // ✅ Import SaveOptions
// import SaveLoadButtons from "../components/builder/SaveLoadButton"; // ✅ Import SaveLoadButtons
// import { useEffect } from "react";
// import { useFormStore } from "../state/formStore"; // Ensure correct import path
// import { useNavigate } from "@remix-run/react";

// export default function Index() {
//   const [mode, setMode] = useState("builder"); // builder or preview
//   const [previewTab, setPreviewTab] = useState("form"); // form or responses
//   const navigate = useNavigate(); // ✅ Added navigation hook

//   return (
//     <BuilderLayout>
//       {/* Mode Toggle Buttons */}
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={() => setMode("builder")}
//           className={`px-4 py-2 rounded ${mode === "builder" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Builder
//         </button>
//         <button
//           onClick={() => setMode("preview")}
//           className={`px-4 py-2 rounded ${mode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Preview
//         </button>
//       </div>

//       {/* Show Template Loader, Save Options & Save/Load Buttons in Builder Mode */}
//       {mode === "builder" && (
//         <>
//           <TemplateLoader />
//           <SaveOptions /> {/* ✅ Show SaveOptions in Builder Mode */}
//           <SaveLoadButtons /> {/* ✅ Added SaveLoadButtons */}
//         </>
//       )}

//       {/* View Saved Forms Button */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => navigate("/form-list")} // ✅ Navigate to saved forms page
//           className="bg-gray-600 text-white px-4 py-2 rounded"
//         >
//           View Saved Forms
//         </button>
//       </div>

//       {/* Conditional Rendering */}
//       {mode === "builder" ? (
//         <DragDropArea />
//       ) : (
//         <div>
//           {/* Preview Tabs */}
//           <div className="flex gap-2 mb-4">
//             <button
//               onClick={() => setPreviewTab("form")}
//               className={`px-4 py-2 rounded ${previewTab === "form" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               Form Preview
//             </button>
//             <button
//               onClick={() => setPreviewTab("responses")}
//               className={`px-4 py-2 rounded ${previewTab === "responses" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               Responses
//             </button>
//           </div>
//           {previewTab === "form" ? <StepManager /> : <ResponseTable />}
//         </div>
//       )}
//     </BuilderLayout>
//   );
// }

//  import React, { useState, useEffect } from "react";
//  import BuilderLayout from "../components/layout/BuilderLayout";
// import DragDropArea from "../components/builder/DragDropArea";
// import StepManager from "../components/builder/StepManager";
// import ResponseTable from "../components/responses/ResponseTable";
// import TemplateLoader from "../components/builder/TemplateLoader";
// import SaveOptions from "../components/builder/SaveOptions"; // ✅ Import SaveOptions
// import SaveLoadButtons from "../components/builder/SaveLoadButton"; // ✅ Import SaveLoadButtons
//  import { useFormStore } from "../state/formStore"; // Ensure correct import path
// import { useNavigate } from "@remix-run/react";

 

// export default function Index() {
//   const [mode, setMode] = useState("builder"); // builder or preview
//   const [previewTab, setPreviewTab] = useState("form"); // form or responses
//   const [formName, setFormName] = useState(""); // ✅ New state for form name
//   const navigate = useNavigate();
//   const { setFormName: updateFormName, saveFormLocally } = useFormStore(); // ✅ Store Form Name

//   // ✅ Auto-save form name when it changes
//   useEffect(() => {
//     updateFormName(formName);
//   }, [formName]);

//   return (
//     <BuilderLayout>
//       {/* ✅ Mode Toggle Buttons */}
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={() => setMode("builder")}
//           className={`px-4 py-2 rounded ${mode === "builder" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Builder
//         </button>
//         <button
//           onClick={() => setMode("preview")}
//           className={`px-4 py-2 rounded ${mode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Preview
//         </button>
//       </div>

//       {/* ✅ Show Name, Template, Save ONLY in Builder Mode */}
//       {mode === "builder" && (
//         <>
//           {/* ✅ Form Name Selection */}
//           <div className="mb-6">
//             <label className="font-semibold">Select Form Name:</label>
//             <select
//               onChange={(e) => setFormName(e.target.value)}
//               className="border rounded px-2 py-1 w-full sm:w-auto"
//             >
//               <option value="">-- Choose or Create a Form --</option>
//               <option value="Contact Form">Contact Form</option>
//               <option value="Feedback Form">Feedback Form</option>
//               <option value="Survey Form">Survey Form</option>
//               <option value="Job Application">Job Application</option>
//             </select>

//             {/* ✅ Custom Form Name Input */}
//             <input
//               type="text"
//               value={formName}
//               onChange={(e) => setFormName(e.target.value)}
//               className="border rounded px-2 py-1 mt-2 w-full sm:w-auto"
//               placeholder="Or enter a custom form name..."
//             />
//           </div>

//           <TemplateLoader />
//           <SaveOptions />
//           <SaveLoadButtons />

//           {/* ✅ Save Form Button */}
//           {/* <div className="flex justify-end mb-4">
//             <button
//               onClick={() => saveFormLocally()}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               💾 Save Form
//             </button>
//           </div> */}

//           {/* ✅ View Saved Forms Button */}
//           <div className="flex justify-end mb-4">
//             <button
//               onClick={() => navigate("/form-list")}
//               className="bg-gray-600 text-white px-4 py-2 rounded"
//             >
//               📜 View Saved Forms
//             </button>
//           </div>
//         </>
//       )}

//       {/* ✅ Conditional Rendering */}
//       {mode === "builder" ? (
//         <DragDropArea />
//       ) : (
//         <div>
//           {/* ✅ Preview Tabs */}
//           <div className="flex gap-2 mb-4">
//             <button
//               onClick={() => setPreviewTab("form")}
//               className={`px-4 py-2 rounded ${previewTab === "form" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               📑 Form Preview
//             </button>
//             <button
//               onClick={() => setPreviewTab("responses")}
//               className={`px-4 py-2 rounded ${previewTab === "responses" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               📊 Responses
//             </button>
//           </div>
//           {previewTab === "form" ? <StepManager /> : <ResponseTable />}
//         </div>
//       )}
//     </BuilderLayout>
//   );
// }


 import React, { useState, useEffect } from "react";
 import BuilderLayout from "../components/layout/BuilderLayout";
import DragDropArea from "../components/builder/DragDropArea";
import StepManager from "../components/builder/StepManager";
import ResponseTable from "../components/responses/ResponseTable";
import TemplateLoader from "../components/builder/TemplateLoader";
import SaveOptions from "../components/builder/SaveOptions"; // ✅ Import SaveOptions
import SaveLoadButtons from "../components/builder/SaveLoadButton"; // ✅ Import SaveLoadButtons
 import { useFormStore } from "../state/formStore"; // Ensure correct import path
import { useNavigate } from "@remix-run/react";


export default function Index() {
  const [mode, setMode] = useState("builder"); 
  const [previewTab, setPreviewTab] = useState("form"); 
  const [formName, setFormName] = useState(""); 
  const navigate = useNavigate();
  
  const { setFormName: updateFormName, saveFormLocally, createNewForm, formCreated, formSaved, formId } = useFormStore();

  // ✅ Auto-save form name when it changes
  useEffect(() => {
    updateFormName(formName);
  }, [formName]);

  return (
    <BuilderLayout>
      {/* ✅ Mode Toggle Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("builder")}
          className={`px-4 py-2 rounded ${mode === "builder" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Builder
        </button>
        <button
          onClick={() => setMode("preview")}
          className={`px-4 py-2 rounded ${mode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Preview
        </button>
      </div>

      {/* ✅ Show Name, Template, Save ONLY in Builder Mode */}
      {mode === "builder" && (
        <>
          {/* ✅ Create Form Button */}
          {!formCreated && (
            <button
              onClick={createNewForm}
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              🏗 Create Form
            </button>
          )}

          {/* ✅ Form Name Selection */}
          {formCreated && (
            <div className="mb-6">
              <label className="font-semibold">Select Form Name:</label>
              <select
                onChange={(e) => setFormName(e.target.value)}
                className="border rounded px-2 py-1 w-full sm:w-auto"
              >
                <option value="">-- Choose or Create a Form --</option>
                <option value="Contact Form">Contact Form</option>
                <option value="Feedback Form">Feedback Form</option>
                <option value="Survey Form">Survey Form</option>
                <option value="Job Application">Job Application</option>
              </select>

              {/* ✅ Custom Form Name Input */}
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="border rounded px-2 py-1 mt-2 w-full sm:w-auto"
                placeholder="Or enter a custom form name..."
              />
            </div>
          )}

          {formCreated && <TemplateLoader />}
          {formCreated && <SaveOptions />}
          {formCreated && <SaveLoadButtons />}

          {/* ✅ Save Form Button */}
          {formCreated && !formSaved && (
            <div className="flex justify-end mb-4">
              
            </div>
          )}

          {/* ✅ View Saved Forms Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => navigate("/form-list")}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              📜 View Saved Forms
            </button>
          </div>

          {/* ✅ Show Link After Form is Saved */}
          {formSaved && (
            <div className="text-center mt-4">
              <a href={`/form/${formId}`} className="text-blue-600 underline">
                
              </a>
            </div>
          )}
        </>
      )}

      {/* ✅ Conditional Rendering */}
      {mode === "builder" ? (
        <DragDropArea />
      ) : (
        <div>
          {/* ✅ Preview Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setPreviewTab("form")}
              className={`px-4 py-2 rounded ${previewTab === "form" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              📑 Form Preview
            </button>
            <button
              onClick={() => setPreviewTab("responses")}
              className={`px-4 py-2 rounded ${previewTab === "responses" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              📊 Responses
            </button>
          </div>
          {previewTab === "form" ? <StepManager /> : <ResponseTable />}
        </div>
      )}
    </BuilderLayout>
  );
}
///************** */
//  import React, { useState, useEffect } from "react";
//  import BuilderLayout from "../components/layout/BuilderLayout";
// import DragDropArea from "../components/builder/DragDropArea";
// import StepManager from "../components/builder/StepManager";
// import ResponseTable from "../components/responses/ResponseTable";
// import TemplateLoader from "../components/builder/TemplateLoader";
// import SaveOptions from "../components/builder/SaveOptions"; // ✅ Import SaveOptions
// import SaveLoadButtons from "../components/builder/SaveLoadButton"; // ✅ Import SaveLoadButtons
//  import { useFormStore } from "../state/formStore"; // Ensure correct import path
// import { useNavigate } from "@remix-run/react";


// export default function Index() {
//   const [mode, setMode] = useState("builder");
//   const [previewTab, setPreviewTab] = useState("form");
//   const [formName, setFormName] = useState("");
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();
//   const { setFormName: updateFormName, saveFormLocally, createNewForm, formCreated, formSaved, formId, addField } =
//     useFormStore();

//   // ✅ Detect Mobile Screens
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768); // ✅ Mobile mode if screen width is < 768px
//     };

//     window.addEventListener("resize", checkScreenSize);
//     checkScreenSize();

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     updateFormName(formName);
//   }, [formName]);

//   return (
//     <BuilderLayout>
//       {/* ✅ Mode Toggle Buttons - Fully Responsive */}
//       <div className="flex flex-wrap gap-2 mb-4 justify-center">
//         <button
//           onClick={() => setMode("builder")}
//           className={`px-4 py-2 rounded w-full sm:w-auto ${mode === "builder" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Builder
//         </button>
//         <button
//           onClick={() => setMode("preview")}
//           className={`px-4 py-2 rounded w-full sm:w-auto ${mode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         >
//           Preview
//         </button>
//       </div>

//       {/* ✅ Show Name, Template, Save ONLY in Builder Mode */}
//       {mode === "builder" && (
//         <>
//           {/* ✅ Create Form Button */}
//           {!formCreated && (
//             <button
//               onClick={createNewForm}
//               className="mb-4 bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
//             >
//               🏗 Create Form
//             </button>
//           )}

//           {/* ✅ Form Name Selection - Fully Responsive */}
//           {formCreated && (
//             <div className="mb-6 flex flex-col gap-4">
//               <label className="font-semibold">Select Form Name:</label>
//               <select
//                 onChange={(e) => setFormName(e.target.value)}
//                 className="border rounded px-3 py-2 w-full sm:w-auto"
//               >
//                 <option value="">-- Choose or Create a Form --</option>
//                 <option value="Contact Form">Contact Form</option>
//                 <option value="Feedback Form">Feedback Form</option>
//                 <option value="Survey Form">Survey Form</option>
//                 <option value="Job Application">Job Application</option>
//               </select>

//               {/* ✅ Custom Form Name Input */}
//               <input
//                 type="text"
//                 value={formName}
//                 onChange={(e) => setFormName(e.target.value)}
//                 className="border rounded px-3 py-2 mt-2 w-full sm:w-auto"
//                 placeholder="Or enter a custom form name..."
//               />
//             </div>
//           )}

//           {formCreated && <TemplateLoader />}
//           {formCreated && <SaveOptions />}
//           {formCreated && <SaveLoadButtons />}

//           {/* ✅ View Saved Forms Button - Responsive */}
//           <div className="flex justify-center mb-4">
//             <button
//               onClick={() => navigate("/form-list")}
//               className="bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto"
//             >
//               📜 View Saved Forms
//             </button>
//           </div>

//           {/* ✅ Show Link After Form is Saved */}
//           {formSaved && (
//             <div className="text-center mt-4">
//               <a href={`/form/${formId}`} className="text-blue-600 underline break-all">
              
//               </a>
//             </div>
//           )}
//         </>
//       )}

//       {/* ✅ Conditional Rendering */}
//       {mode === "builder" ? (
//         isMobile ? (
//           // ✅ Mobile Mode: Replace Drag-and-Drop with Field Buttons
//           <div className="overflow-x-auto flex gap-2 p-2">
//             {["Text", "Textarea", "Dropdown", "Checkbox", "Date"].map((field) => (
//               <button
//                 key={field}
//                 onClick={() => addField(field)}
//                 className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 {field}
//               </button>
//             ))}
//           </div>
//         ) : (
//           // ✅ Desktop Mode: Show Drag-and-Drop Area
//           <DragDropArea />
//         )
//       ) : (
//         <div>
//           {/* ✅ Preview Tabs - Fully Responsive */}
//           <div className="flex flex-wrap gap-2 mb-4 justify-center">
//             <button
//               onClick={() => setPreviewTab("form")}
//               className={`px-4 py-2 rounded w-full sm:w-auto ${previewTab === "form" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               📑 Form Preview
//             </button>
//             <button
//               onClick={() => setPreviewTab("responses")}
//               className={`px-4 py-2 rounded w-full sm:w-auto ${previewTab === "responses" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//             >
//               📊 Responses
//             </button>
//           </div>
//           {previewTab === "form" ? <StepManager /> : <ResponseTable />}
//         </div>
//       )}
//     </BuilderLayout>
//   );
// }


 

 