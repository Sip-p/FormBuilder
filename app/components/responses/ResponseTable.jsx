import { useState } from "react";
import FieldRender from "../builder/FieldRender";
import { useFormStore } from "../../state/formStore";

const ResponseTable = () => {
  const [previewType, setPreviewType] = useState("desktop"); // Default: Desktop
  const fields = useFormStore((s) => s.fields);

  return (
    <div className="p-4">
      {/* Preview Mode Selector - Managed Inside Component */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPreviewType("desktop")}
          className={`px-4 py-2 rounded ${previewType === "desktop" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Desktop
        </button>
        <button
          onClick={() => setPreviewType("tablet")}
          className={`px-4 py-2 rounded ${previewType === "tablet" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Tablet
        </button>
        <button
          onClick={() => setPreviewType("mobile")}
          className={`px-4 py-2 rounded ${previewType === "mobile" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Mobile
        </button>
      </div>

      {/* Form Preview */}
      <div className={`border p-4 rounded bg-white transition-all ${
        previewType === "desktop" ? "w-full" :
        previewType === "tablet" ? "max-w-md" :
        "max-w-xs"
      }`}>
        <FieldRender fields={fields} />
      </div>
    </div>
  );
};

export default ResponseTable;