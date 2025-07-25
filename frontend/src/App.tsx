import '@/styles/global.css';
import { CameraIcon } from '@heroicons/react/24/outline';

function App() {
  return(
    <div className='flex justify-center items-center h-screen'>
      <button className='border border-white w-1/4 aspect-square flex justify-center items-center'>
        <CameraIcon className='w-12 h-12 text-white' strokeWidth={0.75}/>
      </button>
    </div>
  );
}

export default App;
