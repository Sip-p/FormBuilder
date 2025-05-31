 



import { useState } from "react";
import { useFormStore } from "../../state/formStore";
import FieldRender from "./FieldRender";

const StepManager = () => {
  const fields = useFormStore((s) => s.fields);
  const values = useFormStore((s) => s.values);
  const updateFieldValue = useFormStore((s) => s.updateFieldValue);

  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = Math.ceil(fields.length / 3);

  const validateStep = () => {
    const stepFields = fields.slice(currentStep * 3, (currentStep + 1) * 3);
    return stepFields.every((field) =>
      field.required ? !!values[field.id]?.trim() : true
    );
  };

  const allFieldsFilled = fields.every(
    (field) => !field.required || !!values[field.id]?.trim()
  );

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("You have completed all steps. You can now submit the form.");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="text-lg font-semibold mb-4">
        Step {currentStep + 1} of {totalSteps}
      </h2>

      {/* ✅ Render only fields for the current step */}
      <FieldRender fields={fields.slice(currentStep * 3, (currentStep + 1) * 3)} />

      {/* ✅ Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${
            currentStep === 0 ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>

        {currentStep < totalSteps - 1 && (
          <button
            onClick={handleNext}
            disabled={!validateStep()}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              !validateStep() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        )}

        {currentStep === totalSteps - 1 && allFieldsFilled && (
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StepManager;