import '@/styles/global.css';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      console.log(uploadedFile.name);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!inputRef || !inputRef.current) return;

    inputRef.current.click();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="border border-white w-1/4 aspect-square flex flex-col justify-center items-center gap-y-3"
        onClick={handleButtonClick}
      >
        <ArrowUpTrayIcon className="w-12 h-12 text-white" strokeWidth={0.75} />
        <span className="text-white font-thin">Upload Image</span>
      </button>
      <input ref={inputRef} type="file" hidden onChange={handleFileUpload} />
    </div>
  );
}

export default App;
