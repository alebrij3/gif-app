import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Attack on Titan',
    'Death Note',
    'Naruto',
  ]);

  // const handleAdd = () => {
  //   const categoryToAdd = prompt('Escribe una categoría');
  //   setCategories([...categories, categoryToAdd]);
  // };

  return (
    <>
      <div>GifExpertApp</div>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
