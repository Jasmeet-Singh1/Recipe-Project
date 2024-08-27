/* eslint-disable react/prop-types */
import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeList({ allRecipe, setAllRecipe, setInputDetails }) {
  return (
    <div className='flex gap-10'>
      <RecipeCard allRecipe={allRecipe} setAllRecipe={setAllRecipe} setInputDetails={setInputDetails} />
    </div>
  );
}
