/* eslint-disable react/prop-types */

export default function TodoInput(props) {
  const { inputDetails, setInputDetails } = props;

  return (
    <>
      <header className='flex flex-col gap-5'>
        <input
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
      <button
        onClick={() => {
          localStorage.setItem('recipe_list', JSON.stringify(inputDetails));
          setInputDetails({ name: '', description: '', estimatedTime: '' });
        }}
      >
        Add
      </button>
    </>
  );
}
