/* eslint-disable react/prop-types */
import React from 'react';

export default function RecipeCard(props) {
  const { allRecipe, setAllRecipe, setInputDetails } = props;

  // console.log('allRecipe', allRecipe);

  function handleDelete(recipe) {
    const updatedRecipe = allRecipe.filter((item) => item.id !== recipe.id);
    localStorage.setItem('recipe_list', JSON.stringify(updatedRecipe));
    setAllRecipe(updatedRecipe);
  }

  function handleEdit(recipe) {
    const exactID = allRecipe.find((item) => item.id === recipe.id);
    setInputDetails(exactID);
    document.getElementById('nameInput').focus();
  }
  return (
    <div className='flex gap-44'>
      {allRecipe?.map((recipe) => (
        <div className='flex flex-col border-2 border-emerald-600 text-5xl' key={recipe.id}>
          <div> {recipe.name}</div>
          <div> {recipe.description}</div>
          <div> {recipe.estimatedTime}</div>
          <button className='border-2' onClick={() => handleDelete(recipe)}>
            Delete Recipe
          </button>
          <button className='border-2' onClick={() => handleEdit(recipe)}>
            Edit Recipe
          </button>
        </div>
      ))}{' '}
    </div>
  );
}
