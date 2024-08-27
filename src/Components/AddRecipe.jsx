/* eslint-disable react/prop-types */

export default function AddRecipe(props) {
  const { inputDetails, setInputDetails, setAllRecipe, allRecipe } = props;

  const handleAdd = () => {
    const existingItems = JSON.parse(localStorage.getItem('recipe_list'));

    if (existingItems?.length) {
      const updatedItems = [{ ...inputDetails, id: existingItems.length + 1 }, ...existingItems];
      localStorage.setItem('recipe_list', JSON.stringify(updatedItems));
    } else {
      localStorage.setItem('recipe_list', JSON.stringify([{ ...inputDetails, id: 1 }]));
    }

    setInputDetails({ name: '', description: '', estimatedTime: '' });

    const currentExistingItems = JSON.parse(localStorage.getItem('recipe_list'));
    setAllRecipe(currentExistingItems);
  };

  const handleEdit = () => {
    const editeditems = allRecipe.map((item) => {
      if (item.id === inputDetails.id) {
        return inputDetails;
      } else {
        return item;
      }
    });

    setAllRecipe(editeditems);
    localStorage.setItem('recipe_list', JSON.stringify(editeditems));

    setInputDetails({ name: '', description: '', estimatedTime: '' });
  };
  const isEditMode = !!inputDetails.id;

  return (
    <>
      <header className='flex flex-col gap-5'>
        <input
          id='nameInput'
          className='text-black'
          value={inputDetails.name}
          onChange={(e) => {
            setInputDetails((prev) => ({ ...prev, name: e.target.value }));
          }}
          placeholder='Enter recipe name'
        />
        <input
          className='text-black'
          value={inputDetails.description}
          onChange={(e) => {
            setInputDetails((prev) => ({ ...prev, description: e.target.value }));
          }}
          placeholder='Enter recipe description'
        />
        <input
          className='text-black'
          value={inputDetails.estimatedTime}
          onChange={(e) => {
            setInputDetails((prev) => ({ ...prev, estimatedTime: e.target.value }));
          }}
          placeholder='Enter recipe estinmated time (in mins)'
        />
      </header>
      {isEditMode ? (
        <button className='text-3xl' onClick={handleEdit}>
          Edit
        </button>
      ) : (
        <button className='text-3xl' onClick={handleAdd}>
          Add
        </button>
      )}
    </>
  );
}
