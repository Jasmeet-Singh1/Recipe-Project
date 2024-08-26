import { useState } from 'react';
import AddRecipe from './Components/AddRecipe';

function App() {
  const [inputDetails, setInputDetails] = useState({ name: '', description: '', estimatedTime: '' });

  return (
    <div className='bg-slate-700 text-cyan-50 h-screen flex flex-col gap-48 px-10'>
      <h1 className='flex items-center justify-center text-4xl pt-20'>Recipe project React</h1>
      <AddRecipe inputDetails={inputDetails} setInputDetails={setInputDetails} />
    </div>
  );
}

export default App;
