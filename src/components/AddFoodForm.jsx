import { useState } from 'react';

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleImage = e => {
    setImage(e.target.value);
  };

  const handleCalories = e => {
    setCalories(e.target.value);
  };

  const handleServings = e => {
    setServings(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newFood = {
      id: Math.random(),
      name,
      calories,
      image,
      servings,
    };

    addNewFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' value={name} onChange={handleName} />

        <label htmlFor='image'>Image</label>
        <input type='text' name='image' value={image} onChange={handleImage} />

        <label htmlFor='calories'>Calories</label>
        <input
          type='number'
          name='calories'
          value={calories}
          onChange={handleCalories}
          min={0}
          max={1000}
        />

        <label htmlFor='servings'>Servings</label>
        <input
          type='number'
          name='servings'
          value={servings}
          onChange={handleServings}
          min={0}
          max={6}
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
