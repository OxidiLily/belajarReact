import React from 'react';
const Downloads = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Hx9-4-K2VWLWPY-KTTG_umJgUP0Jy9-K'; // Path ke file Google Drive
    link.setAttribute('download', 'CV_Tekad Agung Nugroho.pdf'); // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto mt-5">
      <button
      onClick={downloadPDF} 
        class="relative py-2 px-8 text-white text-base font-bold nded-full overflow-hidden bg-gray-800 rounded-full transition-all duration-400 ease-in-out hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
      >
        Download CV
      </button>

    </div>
  );
};

export default Downloads;