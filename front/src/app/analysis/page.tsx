import UploadReceiptForm from '../_components/UploadReceiptForm';

export default function Page()
{
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Receipt Analysis
      </h1>
      <div className="mb-8">
        <UploadReceiptForm />
      </div>
    </main>
  );
}
