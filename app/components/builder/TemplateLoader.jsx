 


import { predefinedTemplates } from "./predefinedTemplates";
import { useFormStore } from "../../state/formStore";

const TemplateLoader = () => {
  const addField = useFormStore((s) => s.addField);
  const setFields = useFormStore((s) => s.setFields); // ✅ Function to reset fields

  const handleLoadTemplate = (templateId) => {
    console.log("🔄 Switching to template:", templateId); // ✅ Debugging log

    const template = predefinedTemplates.find((t) => t.id === templateId);
    if (template) {
      setFields([]); // ✅ Clears previous fields before adding new ones
      template.fields.forEach((field) => addField(field));

      console.log("✅ Loaded fields:", template.fields); // ✅ Debugging log
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold">Select Template:</label>
      <select 
        onChange={(e) => handleLoadTemplate(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      >
        <option value="">-- Choose a template --</option>
        {predefinedTemplates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateLoader;