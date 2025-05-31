// // import { create } from "zustand";

// // export const useFormStore = create((set) => ({
// //   fields: [],
// //   selectedFieldId: null,
// //   previewMode: false,
// //   addField: (field) =>
// //     set((state) => ({ fields: [...state.fields, field] })),

// //   updateField: (id, updates) =>
// //     set((state) => ({
// //       fields: state.fields.map((f) =>
// //         f.id === id ? { ...f, ...updates } : f
// //       ),
// //     })),

// //   setSelectedField: (id) => set(() => ({ selectedFieldId: id })),

// //   getSelectedField: () => {
// //     const { fields, selectedFieldId } = useFormStore.getState();
// //     return fields.find((f) => f.id === selectedFieldId);
// //   },

// //   // ✅ Save to localStorage
// //   saveForm: () => {
// //     const { fields } = useFormStore.getState();
// //     localStorage.setItem("savedForm", JSON.stringify(fields));
// //   },

// //   // ✅ Load from localStorage
// //   loadForm: () => {
// //     const saved = localStorage.getItem("savedForm");
// //     if (saved) {
// //       set({ fields: JSON.parse(saved) });
// //     }
// //   },
// //     togglePreviewMode: () =>
// //         set((state) => ({ previewMode: !state.previewMode}))
// // }));


// import { create } from "zustand";
// import { nanoid } from "nanoid";
// export const useFormStore=create((set)=>{
//     return{
//         fields:[],
//         values:{},
//         formId:null,


// // loadFormById: (formId) => {
// //   const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};

// //   if (!savedForms[formId]) {
// //     alert("Error: No form found for this ID.");
// //     return;
// //   }

// //   set({
// //     fields: savedForms[formId].fields?.length ? savedForms[formId].fields : [],
// //     values: savedForms[formId].values ?? {},
// //     formId,
// //   });

// //   console.log("Loaded Form:", savedForms[formId]);
// //   alert(`Form loaded successfully! ID: ${formId}`);
// // },


// loadFormById: (formId) => {
//   const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};

//   console.log("Attempting to load Form ID:", formId);
//   console.log("Saved Forms:", savedForms);

//   if (!savedForms[formId]) {
//     alert("Error: No form found for this ID.");
//     return;
//   }

//   set({
//     fields: savedForms[formId].fields ?? [],
//     values: savedForms[formId].values ?? {},
//     formId,
//   });

//   console.log("Loaded Form:", savedForms[formId]);
//   alert(`Form loaded successfully! ID: ${formId}`);
// },

//        createNewForm: () => {
//     const newFormId = nanoid(10); // Generate unique 10-character ID
//     set({ formId: newFormId, fields: [], values: {} });
//     console.log(`New form created with ID: ${newFormId}`);
//     // alert(`New form created! Shareable ID: ${newFormId}`);
//   },

// // saveFormLocally: () => {
// //   set((state) => {
// //     if (!state.formId || state.formId === "null") {
// //       alert("Error: No valid Form ID found! Try creating a form first.");
// //       return;
// //     }

// //     if (state.fields.length === 0) {
// //       alert("Error: Cannot save an empty form!");
// //       return;
// //     }

// //     const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
// //     savedForms[state.formId] = { fields: state.fields, values: state.values };
// //     localStorage.setItem("savedForms", JSON.stringify(savedForms));
// //     console.log("Form saved successfully:", savedForms[state.formId]);
// //     alert(`Form saved successfully! Shareable ID: ${state.formId}`);
// //   });
// // },


// // updateFieldValue: (fieldId, newValue) =>
// //     set((state) => ({
// //       fields: state.fields.map((field) =>
// //         field.id === fieldId ? { ...field, value: newValue } : field
// //       ),
// //     })),



//         // addField:function(field){
//         //     set((state)=>{
//         //         return {fields:[...state.fields,field],values:{...state.values,[field.id]:""}};
//         //     });
//         // },

// // addField: (field) =>
// //     set((state) => ({
// //       fields: [...state.fields, { ...field, value: "" }],
// //       values: { ...state.values, [field.id]: "" }, // Track value separately
// //     })),


// saveFormLocally: () => {
//   set((state) => {
//     if (!state.formId || state.formId === "null") {
//       alert("Error: No valid Form ID found! Try creating a form first.");
//       return state; // <-- return state, not nothing!
//     }

//     if (state.fields.length === 0) {
//       alert("Error: Cannot save an empty form!");
//       return state; // <-- return state, not nothing!
//     }

//     const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//     savedForms[state.formId] = { fields: state.fields, values: state.values };
//     localStorage.setItem("savedForms", JSON.stringify(savedForms));
//     alert(`Form saved successfully! Shareable ID: ${state.formId}`);
//     return state; // <-- always return state!
//   });
// },

//  addField: (field) =>
//     set((state) => ({
//       fields: [...state.fields, { ...field, value: "" }],    values: { ...state.values, [field.id]: "" }
//  // Ensure each field has a value property
//     })),

//     updateFieldValue: (fieldId, newValue) =>
//     set((state) => ({
//       values: { ...state.values, [fieldId]: newValue }, // Persist values separately
//     })),
 

    


//     // updateFieldValue: (fieldId, newValue) =>
//     // set((state) => ({
//     //   fields: state.fields.map((field) =>
//     //     field.id === fieldId ? { ...field, value: newValue } : field
//     //   ),
//     // })),


//         // removeField:function(fieldId){
//         //     set((state)=>{
//         //         return{
//         //             fields:state.fields.filter((field)=>field.id!==fieldId)
//         //         }
//         //     })
//         // },

//         // updateField:function(fieldIdx,updates){
//         //     set((state)=>{
//         //         const newfield=[...state.fields];
//         //         newfield[fieldIdx]={...newfield[fieldIdx],...updates};
//         //         return {fields:newfield};
            
//         //     })
//         // },
        
// //  removeField: function (fieldId) {
// //     console.log("Removing field:", fieldId);  // Debugging log
// //     set((state) => ({
// //         fields: state.fields.filter((field) => field.id !== fieldId),
        
// //     }));
// // },


// removeField: function (fieldId) {
//   set((state) => {
//     const { [fieldId]: _, ...restValues } = state.values;
//     return {
//       fields: state.fields.filter((field) => field.id !== fieldId),
//       values: restValues
//     };
//   });
// }, 


// updateField: function (fieldId, updates) {
//     set((state) => {
//         console.log("Updating field:", fieldId, "Updates:", updates); // Debugging log
//         return {
//             fields: state.fields.map((field) =>
//                 field.id === fieldId ? { ...field, ...updates } : field
//             ),
//         };
//     });
// },
        
// reorderFields: (activeId, overId) => set((state) => {
//     const oldIndex = state.fields.findIndex((field) => field.id === activeId);
//     const newIndex = state.fields.findIndex((field) => field.id === overId);

//     if (oldIndex === -1 || newIndex === -1) return state; // Prevent invalid moves

//     const newFields = [...state.fields];
//     const [movedField] = newFields.splice(oldIndex, 1);
//     newFields.splice(newIndex, 0, movedField);

//     return { fields: newFields };
// }),
//     }
// })
 


// import { create } from "zustand";
// import { nanoid } from "nanoid";
// import { useEffect } from "react";
// export const useFormStore = create((set) => ({
//   fields: [],
//   values: {},
//   formId: null,

 

//   /** ✅ Load Form by ID */
//   loadFormById: (formId) => {
//     const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//     console.log("Attempting to load Form ID:", formId);
    
//     if (!savedForms[formId]) {
//       alert("Error: No form found for this ID.");
//       return;
//     }

//     set({
//       fields: savedForms[formId].fields ?? [],
//       values: savedForms[formId].values ?? {},
//       formId,
//     });

//     console.log("Loaded Form:", savedForms[formId]);
//     alert(`Form loaded successfully! ID: ${formId}`);
//   },

//   /** ✅ Create New Form */
//   createNewForm: () => {
//     const newFormId = nanoid(10);
//     set({ formId: newFormId, fields: [], values: {} });
//     console.log(`New form created with ID: ${newFormId}`);
//   },

//   /** ✅ Save Form Locally */
//   saveFormLocally: () => {
//     set((state) => {
//       if (!state.formId || state.formId === "null") {
//         alert("Error: No valid Form ID found! Try creating a form first.");
//         return state;
//       }
//       if (state.fields.length === 0) {
//         alert("Error: Cannot save an empty form!");
//         return state;
//       }

//       const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//       savedForms[state.formId] = { fields: state.fields, values: state.values };
//       localStorage.setItem("savedForms", JSON.stringify(savedForms));

//       alert(`Form saved successfully! Shareable ID: ${state.formId}`);
//       return state;
//     });
//   },

//   /** ✅ Add Field (Clearing Previous Fields on Template Switch) */
//   setFields: (newFields) => set({ fields: newFields, values: {} }), // Clears all fields

//   addField: (field) =>
//     set((state) => ({
//       fields: [...state.fields, { ...field, value: "" }],
//       values: { ...state.values, [field.id]: "" },
//     })),

//   /** ✅ Update Field Value */
//   updateFieldValue: (fieldId, newValue) =>
//     set((state) => ({
//       values: { ...state.values, [fieldId]: newValue },
//     })),

//   /** ✅ Remove Field */
//   removeField: (fieldId) =>
//     set((state) => {
//       const { [fieldId]: _, ...restValues } = state.values;
//       return {
//         fields: state.fields.filter((field) => field.id !== fieldId),
//         values: restValues,
//       };
//     }),

//   /** ✅ Update Field */
//   updateField: (fieldId, updates) =>
//     set((state) => ({
//       fields: state.fields.map((field) =>
//         field.id === fieldId ? { ...field, ...updates } : field
//       ),
//     })),

//   /** ✅ Reorder Fields */
//   reorderFields: (activeId, overId) =>
//     set((state) => {
//       const oldIndex = state.fields.findIndex((field) => field.id === activeId);
//       const newIndex = state.fields.findIndex((field) => field.id === overId);

//       if (oldIndex === -1 || newIndex === -1) return state;

//       const newFields = [...state.fields];
//       const [movedField] = newFields.splice(oldIndex, 1);
//       newFields.splice(newIndex, 0, movedField);

//       return { fields: newFields };
//     }),
// }));



// import { create } from "zustand";
// import { nanoid } from "nanoid";

// export const useFormStore = create((set) => ({
//   fields: [],
//   values: {},
//   formId: null,
//   formName: "", // ✅ Track form name

//   /** ✅ Set Form Name */
//   setFormName: (name) => set({ formName: name }),

//   /** ✅ Load Form by ID */
//   loadFormById: (formId) => {
//     const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//     console.log("Attempting to load Form ID:", formId);

//     if (!savedForms[formId]) {
//       alert("Error: No form found for this ID.");
//       return;
//     }

//     set({
//       fields: savedForms[formId].fields ?? [],
//       values: savedForms[formId].values ?? {},
//       formId,
//       formName: savedForms[formId].formName ?? "Untitled Form", // ✅ Load Form Name
//     });

//     console.log("Loaded Form:", savedForms[formId]);
//     alert(`Form loaded successfully! ID: ${formId}`);
//   },

//   /** ✅ Create New Form */
//   createNewForm: () => {
//     const newFormId = nanoid(10);
//     set({ formId: newFormId, fields: [], values: {}, formName: "" });
//     console.log(`New form created with ID: ${newFormId}`);
//   },

//   /** ✅ Save Form Locally */
//   saveFormLocally: () => {
//     set((state) => {
//       if (!state.formId || state.formId === "null") {
//         alert("Error: No valid Form ID found! Try creating a form first.");
//         return state;
//       }
//       if (state.fields.length === 0) {
//         alert("Error: Cannot save an empty form!");
//         return state;
//       }

//       const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//       savedForms[state.formId] = { 
//         fields: state.fields, 
//         values: state.values, 
//         formName: state.formName // ✅ Save form name
//       };

//       localStorage.setItem("savedForms", JSON.stringify(savedForms));
//       alert(`Form saved successfully! Shareable ID: ${state.formId}`);
//       return state;
//     });
//   },

//   /** ✅ Set Fields (Clearing Previous Fields on Template Switch) */
//   setFields: (newFields) => set({ fields: newFields, values: {} }),

//   /** ✅ Add Field */
//   addField: (field) =>
//     set((state) => ({
//       fields: [...state.fields, { ...field, value: "" }],
//       values: { ...state.values, [field.id]: "" },
//     })),

//   /** ✅ Update Field Value */
//   updateFieldValue: (fieldId, newValue) =>
//     set((state) => ({
//       values: { ...state.values, [fieldId]: newValue },
//     })),

//   /** ✅ Remove Field */
//   removeField: (fieldId) =>
//     set((state) => {
//       const { [fieldId]: _, ...restValues } = state.values;
//       return {
//         fields: state.fields.filter((field) => field.id !== fieldId),
//         values: restValues,
//       };
//     }),

//   /** ✅ Update Field */
//   updateField: (fieldId, updates) =>
//     set((state) => ({
//       fields: state.fields.map((field) =>
//         field.id === fieldId ? { ...field, ...updates } : field
//       ),
//     })),

//   /** ✅ Reorder Fields */
//   reorderFields: (activeId, overId) =>
//     set((state) => {
//       const oldIndex = state.fields.findIndex((field) => field.id === activeId);
//       const newIndex = state.fields.findIndex((field) => field.id === overId);

//       if (oldIndex === -1 || newIndex === -1) return state;

//       const newFields = [...state.fields];
//       const [movedField] = newFields.splice(oldIndex, 1);
//       newFields.splice(newIndex, 0, movedField);

//       return { fields: newFields };
//     }),
// }));


import { create } from "zustand";
import { nanoid } from "nanoid";

export const useFormStore = create((set) => ({
  fields: [],
  values: {},
  formId: null,
  formName: "",
  formCreated: false, // ✅ Track whether the form is created
  formSaved: false, // ✅ Track whether the form is saved

  /** ✅ Set Form Name */
  setFormName: (name) => set({ formName: name }),

  /** ✅ Create New Form */
  createNewForm: () => {
    const newFormId = nanoid(10);
    set({ formId: newFormId, fields: [], values: {}, formName: "", formCreated: true, formSaved: false });
    console.log(`New form created with ID: ${newFormId}`);
  },

  /** ✅ Load Form by ID */
  loadFormById: (formId) => {
    const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
    console.log("Attempting to load Form ID:", formId);

    if (!savedForms[formId]) {
      alert("Error: No form found for this ID.");
      return;
    }

    set({
      fields: savedForms[formId].fields ?? [],
      values: savedForms[formId].values ?? {},
      formId,
      formName: savedForms[formId].formName ?? "Untitled Form",
      formCreated: true, // ✅ Ensure the form is marked as created
      formSaved: true, // ✅ Ensure the form is marked as saved
    });

    console.log("Loaded Form:", savedForms[formId]);
    alert(`Form loaded successfully! ID: ${formId}`);
  },

  /** ✅ Save Form Locally */
  saveFormLocally: () => {
    set((state) => {
      if (!state.formId || state.formId === "null") {
        alert("Error: No valid Form ID found! Try creating a form first.");
        return state;
      }
      if (state.fields.length === 0) {
        alert("Error: Cannot save an empty form!");
        return state;
      }

      const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
      savedForms[state.formId] = { 
        fields: state.fields, 
        values: state.values, 
        formName: state.formName 
      };

      localStorage.setItem("savedForms", JSON.stringify(savedForms));

      alert(`Form saved successfully! Shareable ID: ${state.formId}`);
      return { ...state, formSaved: true }; // ✅ Mark form as saved
    });
  },

  /** ✅ Set Fields */
  setFields: (newFields) => set({ fields: newFields, values: {} }),

  /** ✅ Add Field */
  addField: (field) =>
    set((state) => ({
      fields: [...state.fields, { ...field, value: "" }],
      values: { ...state.values, [field.id]: "" },
    })),

  /** ✅ Update Field Value */
  updateFieldValue: (fieldId, newValue) =>
    set((state) => ({
      values: { ...state.values, [fieldId]: newValue },
    })),

  /** ✅ Remove Field */
  removeField: (fieldId) =>
    set((state) => {
      const { [fieldId]: _, ...restValues } = state.values;
      return {
        fields: state.fields.filter((field) => field.id !== fieldId),
        values: restValues,
      };
    }),

  /** ✅ Update Field */
  updateField: (fieldId, updates) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === fieldId ? { ...field, ...updates } : field
      ),
    })),

  /** ✅ Reorder Fields */
  reorderFields: (activeId, overId) =>
    set((state) => {
      const oldIndex = state.fields.findIndex((field) => field.id === activeId);
      const newIndex = state.fields.findIndex((field) => field.id === overId);

      if (oldIndex === -1 || newIndex === -1) return state;

      const newFields = [...state.fields];
      const [movedField] = newFields.splice(oldIndex, 1);
      newFields.splice(newIndex, 0, movedField);

      return { fields: newFields };
    }),
}));



//  import { create } from "zustand";
// import { nanoid } from "nanoid";

// export const useFormStore = create((set) => ({
//   fields: [],
//   values: {},
//   selectedFields: [], // ✅ Track selected fields for button-based form creation
//   formId: null,
//   formName: "",
//   formCreated: false,
//   formSaved: false,

//   /** ✅ Set Form Name */
//   setFormName: (name) => set({ formName: name }),

//   /** ✅ Create New Form */
//   createNewForm: () => {
//     const newFormId = nanoid(10);
//     set({ formId: newFormId, fields: [], selectedFields: [], values: {}, formName: "", formCreated: true, formSaved: false });
//     console.log(`New form created with ID: ${newFormId}`);
//   },

//   /** ✅ Load Form by ID */
//   loadFormById: (formId) => {
//     const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//     console.log("Attempting to load Form ID:", formId);

//     if (!savedForms[formId]) {
//       alert("Error: No form found for this ID.");
//       return;
//     }

//     set({
//       fields: savedForms[formId].fields ?? [],
//       selectedFields: savedForms[formId].fields ?? [],
//       values: savedForms[formId].values ?? {},
//       formId,
//       formName: savedForms[formId].formName ?? "Untitled Form",
//       formCreated: true,
//       formSaved: true,
//     });

//     console.log("Loaded Form:", savedForms[formId]);
//     alert(`Form loaded successfully! ID: ${formId}`);
//   },

//   /** ✅ Save Form Locally */
//   saveFormLocally: () => {
//     set((state) => {
//       if (!state.formId || state.formId === "null") {
//         alert("Error: No valid Form ID found! Try creating a form first.");
//         return state;
//       }
//       if (state.selectedFields.length === 0) {
//         alert("Error: Cannot save an empty form!");
//         return state;
//       }

//       const savedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
//       savedForms[state.formId] = {
//         fields: state.selectedFields,
//         values: state.values,
//         formName: state.formName,
//       };

//       localStorage.setItem("savedForms", JSON.stringify(savedForms));

//       alert(`Form saved successfully! Shareable ID: ${state.formId}`);
//       return { ...state, formSaved: true };
//     });
//   },

//   /** ✅ Set Fields */
//   setFields: (newFields) => set({ fields: newFields, values: {} }),

//   /** ✅ Add Field */
//   addField: (fieldType) => {
//     set((state) => {
//       const newField = {
//         id: nanoid(),
//         type: fieldType,
//         label: fieldType.charAt(0).toUpperCase() + fieldType.slice(1),
//         value: "",
//       };
//       return { selectedFields: [...state.selectedFields, newField] };
//     });
//   },

//   /** ✅ Remove Field */
//   removeField: (fieldId) => set((state) => ({
//     selectedFields: state.selectedFields.filter((field) => field.id !== fieldId),
//   })),

//   /** ✅ Update Field Value */
//   updateFieldValue: (fieldId, newValue) =>
//     set((state) => ({
//       values: { ...state.values, [fieldId]: newValue },
//     })),

//   /** ✅ Update Field */
//   updateField: (fieldId, updates) =>
//     set((state) => ({
//       selectedFields: state.selectedFields.map((field) =>
//         field.id === fieldId ? { ...field, ...updates } : field
//       ),
//     })),

//   /** ✅ Reorder Fields */
//   reorderFields: (activeId, overId) =>
//     set((state) => {
//       const oldIndex = state.selectedFields.findIndex((field) => field.id === activeId);
//       const newIndex = state.selectedFields.findIndex((field) => field.id === overId);

//       if (oldIndex === -1 || newIndex === -1) return state;

//       const newFields = [...state.selectedFields];
//       const [movedField] = newFields.splice(oldIndex, 1);
//       newFields.splice(newIndex, 0, movedField);

//       return { selectedFields: newFields };
//     }),
// }));