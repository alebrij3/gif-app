import { useState } from 'react';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [...categories, inputValue]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='category'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddCategory;
