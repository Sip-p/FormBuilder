 import { useFormStore } from "../../state/formStore";
 const SaveOptions = () => {
  const createNewForm = useFormStore((s) => s.createNewForm);
  const saveFormLocally = useFormStore((s) => s.saveFormLocally);
  const loadFormById = useFormStore((s) => s.loadFormById);
  const formId = useFormStore((s) => s.formId);

  return (
    <div className="mb-4 flex gap-2">
      <button onClick={createNewForm} className="bg-green-500 text-white px-4 py-2 rounded">
        Create New Form
      </button>
      
      {formId && (
        <div className="mt-2">
          <p>Shareable Link: <strong>http://localhost:YourPort/fill/{formId}</strong></p>
   

        </div>
      )}
    </div>
  );
};

export default SaveOptions;