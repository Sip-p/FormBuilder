import FormList from "../components/builder/FormList";

export default function FormListPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">📜 All Saved Forms</h1>
        <FormList />
      </div>
    </div>
  );
}