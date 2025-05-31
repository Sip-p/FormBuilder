 


import { useFormStore } from '../../state/formStore';

const FieldWrapper = ({ field, dragHandleProps }) => {
  const removeField = useFormStore((s) => s.removeField);
  const updateField = useFormStore((s) => s.updateField);

  const handleLabelChange = (e) => {
    updateField(field.id, { label: e.target.value });
  };

  const handlePlaceholderChange = (e) => {
    updateField(field.id, { placeholder: e.target.value });
  };

  const handleRequiredChange = (e) => {
    updateField(field.id, { required: e.target.checked });
  };

  const handleTextStyleChange = (e) => {
    updateField(field.id, { textStyle: e.target.value });
  };

 


const handleOptionChange = (e, index) => {
  const newOptions = [...field.options];

  
  if (newOptions.includes(e.target.value)) {
    alert("Option name already exists! Choose a unique name.");
    return;
  }

  newOptions[index] = e.target.value;
  updateField(field.id, { options: newOptions });
};
 


const handleAddOption = () => {
  const currentOptions = field.options || []; // ✅ Ensure options exist
  const newOption = `Option ${currentOptions.length + 1}`;

  if (currentOptions.includes(newOption)) {
    alert("Option name already exists! Choose a unique name.");
    return;
  }

  updateField(field.id, { options: [...currentOptions, newOption] });
};

// const handleAddOption = () => {
//   const currentOptions = field.options || []; // Ensure field.options exists
//   const newOption = `Option ${currentOptions.length + 1}`;
  
//   updateField(field.id, { options: [...currentOptions, newOption] });
// };
  const handleRemoveOption = (index) => {
    const newOptions = field.options.filter((_, i) => i !== index);
    updateField(field.id, { options: newOptions });
  };

  const handleRadioSelection = (e) => {
    updateField(field.id, { selectedValue: e.target.value });
  };

  return (
    <div className="mb-4 border p-2 rounded hover:bg-gray-100 flex flex-col gap-2">
      
      {dragHandleProps && (
        <span {...dragHandleProps} style={{
          cursor: "grab", marginBottom: 8, userSelect: "none", display: "inline-block", fontSize: "1.5rem"
        }} tabIndex={0} aria-label="Drag to reorder">
          ⠿
        </span>
      )}

     
      <input
        type="text"
        value={field.label || ""}
        onChange={handleLabelChange}
        className="border p-2 w-full mb-2"
        placeholder="Label"
      />

       
      {(field.type === "text" || field.type === "textarea" || field.type === "heading" || field.type === "paragraph") && (
        <select className="border p-2 rounded w-full" value={field.textStyle || "normal"} onChange={handleTextStyleChange}>
          <option value="normal">Normal Text</option>
          <option value="paragraph">Paragraph</option>
          <option value="heading">Heading</option>
        </select>
      )}

       
      {field.type === "radio" && (
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Options:</label>
          {/* {field.options?.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="radio" name={field.id} value={option} checked={field.selectedValue === option} onChange={handleRadioSelection} />
              <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} className="border px-2 py-1 rounded" />
              <button onClick={() => handleRemoveOption(index)} className="bg-red-500 text-white px-2 py-1 rounded">🗑 Remove</button>
            </div>
          ))} */}

          {field.options?.map((option, index) => (
  <label key={index} className="flex items-center gap-2">
    <input type="radio" name={field.id} value={option} />
    <input
      type="text"
      value={option}
      onChange={(e) => handleOptionChange(e, index)}
      className="border px-2 py-1 rounded"
    />
    <button onClick={() => handleRemoveOption(index)} className="bg-red-500 text-white px-2 py-1 rounded">
      🗑 Remove
    </button>
  </label>
))}
          <button onClick={handleAddOption} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">➕ Add Option</button>
        </div>
      )}

      {/* Other Fields */}
      {field.type === "text" && (
        <input type="text" value={field.placeholder || ""} onChange={handlePlaceholderChange} className="border px-2 py-1 rounded" placeholder="Placeholder" />
      )}

      {field.type === "email" && (
        <input type="email" value={field.placeholder || ""} onChange={handlePlaceholderChange} className="border px-2 py-1 rounded" placeholder="Email" />
      )}

      {field.type === "number" && (
        <input type="number" value={field.placeholder || ""} onChange={handlePlaceholderChange} className="border px-2 py-1 rounded" placeholder="Number" />
      )}

      {field.type === "checkbox" && (
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={field.required || false} onChange={handleRequiredChange} />
          Required
        </label>
      )}

      {field.type === "textarea" && (
        <textarea className="border px-2 py-1 rounded w-full" placeholder={field.placeholder || ""} onChange={handlePlaceholderChange} />
      )}

      {field.type === "heading" && (
        <h2 className="text-xl font-bold">{field.label}</h2>
      )}

      {field.type === "paragraph" && (
        <p className="text-gray-600">{field.label}</p>
      )}

      {/* Remove Field Button */}
      <button type="button" onClick={() => removeField(field.id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
        Remove Field
      </button>
    </div>
  );
};

export default FieldWrapper;