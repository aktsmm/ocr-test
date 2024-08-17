'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

const LayoutHeader = () =>
{
  const router = useRouter();
  const handleResultClick = () => router.push('/');
  const handleAnalysisClick = () => router.push('/analysis');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl">OCR APP</span>
        </a>
        <div className="flex md:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex flex-wrap items-center text-base justify-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto md:static absolute top-full left-0 bg-black md:bg-transparent`}>
          <a
            className="block md:inline-block mr-5 hover:text-gray-900 cursor-pointer hover:bg-gray-200 p-2 md:p-0"
            onClick={() => { handleResultClick(); setIsOpen(false); }}
          >
            分析結果
          </a>
          <a
            className="block md:inline-block mr-5 hover:text-gray-900 cursor-pointer hover:bg-gray-200 p-2 md:p-0"
            onClick={() => { handleAnalysisClick(); setIsOpen(false); }}
          >
            分析画面
          </a>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-start">
            <a
              className="block w-full text-left p-2 hover:text-gray-900 cursor-pointer hover:bg-gray-200"
              onClick={() => { handleResultClick(); setIsOpen(false); }}
            >
              分析結果
            </a>
            <a
              className="block w-full text-left p-2 hover:text-gray-900 cursor-pointer hover:bg-gray-200"
              onClick={() => { handleAnalysisClick(); setIsOpen(false); }}
            >
              分析画面
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;
