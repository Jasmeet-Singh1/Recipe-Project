import { useEffect, useState } from 'react';
import AddRecipe from './Components/AddRecipe';
import RecipeList from './Components/RecipeList';

function App() {
  const [inputDetails, setInputDetails] = useState({ name: '', description: '', estimatedTime: '' });
  const [allRecipe, setAllRecipe] = useState();

  useEffect(() => {
    const currentExistingItems = JSON.parse(localStorage.getItem('recipe_list'));
    currentExistingItems && setAllRecipe(currentExistingItems);
  }, []);

  return (
    <div className='bg-slate-700 text-cyan-50 flex flex-col gap-48 px-10'>
      <h1 className='flex items-center justify-center text-4xl pt-20'>Recipe project React</h1>
      <AddRecipe
        inputDetails={inputDetails}
        setInputDetails={setInputDetails}
        allRecipe={allRecipe}
        setAllRecipe={setAllRecipe}
      />
      <RecipeList allRecipe={allRecipe} setAllRecipe={setAllRecipe} setInputDetails={setInputDetails} />
    </div>
  );
}

export default App;
