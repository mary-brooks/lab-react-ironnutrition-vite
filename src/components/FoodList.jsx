import { useState } from 'react';

import FoodBox from './FoodBox';
import foodsJson from '../foods.json';
import AddFoodForm from './AddFoodForm';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = id => {
    const newFoodList = foods.filter(food => {
      return food.id !== id;
    });

    setFoods(newFoodList);
  };

  const addNewFood = food => {
    const updatedFoods = [food, ...foods];
    setFoods(updatedFoods);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addNewFood={addNewFood} />

      {foods.map(food => {
        return <FoodBox food={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default FoodList;
