'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

type ReceiptSummary = {
  id: string;
  fileName: string;
  createdTime: string;
};

const AnalysisResultTable = () =>
{
  const [receiptList, setReceiptList] = useState<ReceiptSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() =>
  {
    const fetchReceiptList = async () =>
    {
      const apiHost = process.env.NEXT_PUBLIC_API_HOST;
      try
      {
        const response = await fetch(`${apiHost}/receipt/list`);
        if (!response.ok)
        {
          throw new Error('Failed to fetch receipt list');
        }
        const result = await response.json();
        setReceiptList(result);
      } catch (err: any)
      {
        setError(err.message);
      } finally
      {
        setLoading(false);
      }
    };

    fetchReceiptList();
  }, []);

  const handleRowClick = (id: string) =>
  {
    console.log(`Row clicked: ${id}`);
    router.push(`/receipt/${id}`);
  }

  if (loading) return <p>Loading...</p>;
  if (error)
  {
    return <div>Error: {error}</div>;
  }

  return (
    <table className="table-auto min-w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-lg bg-black rounded-tl rounded-bl">分析日時</th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-lg bg-black">アップロード ファイル</th>
        </tr>
      </thead>
      <tbody>
        {receiptList.map((receipt) => (
          <tr key={receipt.id}
            className='cursor-pointer hover:bg-gray-200'
            onClick={() => handleRowClick(receipt.id)}
          >
            <td className="px-4 py-3">{receipt.createdTime}</td>
            <td className="px-4 py-3">{receipt.fileName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AnalysisResultTable;
