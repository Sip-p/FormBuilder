 


import React, { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function FormList() {
  const navigate = useNavigate();
  const [savedForms, setSavedForms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const formsPerPage = 4;

  useEffect(() => {
    const storedForms = JSON.parse(localStorage.getItem("savedForms")) || {};
    const formList = Object.entries(storedForms).filter(([key]) => key !== "null").reverse();
    setSavedForms(formList);
  }, []);

  const totalPages = Math.ceil(savedForms.length / formsPerPage);
  const startIndex = (currentPage - 1) * formsPerPage;
  const currentForms = savedForms.slice(startIndex, startIndex + formsPerPage);

  const handleDelete = (formId) => {
    const updatedForms = { ...JSON.parse(localStorage.getItem("savedForms")) };
    delete updatedForms[formId]; 
    localStorage.setItem("savedForms", JSON.stringify(updatedForms));
    setSavedForms(Object.entries(updatedForms).filter(([key]) => key !== "null").reverse());
    alert(`❌ Form ID: ${formId} deleted successfully!`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Saved Forms</h2>

      {savedForms.length === 0 ? (
        <p className="text-red-500">⚠ No saved forms found.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {currentForms.map(([formId, form]) => (
              <li key={formId} className="p-4 border rounded-md shadow-md bg-gray-50 flex justify-between items-center">
                <div>
                  <p className="font-semibold">📜 Form Name: {form.formName || "Untitled Form"}</p>
                  <p className="text-gray-600">🆔 Form ID: {formId}</p>
                  <p className="text-gray-600">📑 Fields: {form.fields.length}</p>
                  <a href={`http://localhost:5174/fill/${formId}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    🔗 Open Form
                  </a>
                </div>
                {/* ✅ Edit & Delete Buttons */}
                <div className="space-x-2">
                  
                  <button onClick={() => handleDelete(formId)} className="bg-red-500 text-white px-3 py-1 rounded">
                    ❌ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-blue-500 text-white"}`} disabled={currentPage === 1}>
              Previous
            </button>
            <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-blue-500 text-white"}`} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}