'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const UploadReceiptForm = () =>
{
  const [file, setFile] = useState<File | null>(null);
  const [analyze, setAnalyze] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (e.target.files)
    {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault();

    if (!file)
    {
      alert('ファイルを選択してください');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const apiHost = process.env.NEXT_PUBLIC_API_HOST;

    try
    {
      setAnalyze(true);
      const response = await fetch(`${apiHost}/receipt/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok)
      {
        throw new Error('アップロードに失敗しました');
      }
      setAnalyze(false);
      alert('アップロードが完了しました');
      router.push('/');
    } catch (error)
    {
      console.error('Error uploading file:', error);
      alert('アップロードに失敗しました');
    }
  };

  if (analyze) return <p>Analyze...</p>;
  if (error)
  {
    return <div>Error: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-xl font-bond mb-4'>レシートのアップロード</h2>
      <input type="file" onChange={handleFileChange} className='mb-4 border border-gray-300 p-2 rounded w-full' />
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
        アップロード
      </button>
    </form>
  )
}

export default UploadReceiptForm;