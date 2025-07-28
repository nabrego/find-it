import '@/styles/global.css';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';

export const ImageUploader = () => {
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

    const handleImageDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setFile(null);
    }

    return (
        <>
          <button
            className="relative border border-white w-1/4 aspect-square flex flex-col justify-center items-center gap-y-3"
            onClick={handleButtonClick}
          >
            {file && (
              <button
                className="absolute right-1 top-1 h-6 w-6 flex items-center justify-center rounded-full bg-gray-500 z-10"
                onClick={handleImageDelete}
              >
                <XMarkIcon className="w-4 h-4 text-white" />
              </button>
            )}
            {!file ? (
              <>
                <ArrowUpTrayIcon className="w-12 h-12 text-white" strokeWidth={0.75} />
                <span className="text-white font-thin">Upload Image</span>
              </>
            ) : (
              <>
                <img className='w-full h-full' src={URL.createObjectURL(file)}/>
              </>
            )}
          </button>
          <input ref={inputRef} type="file" hidden onChange={handleFileUpload} />
        </>
    );
}