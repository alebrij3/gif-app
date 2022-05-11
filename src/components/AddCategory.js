import { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User tried to submit the form!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddCategory;
