function FoodBox({ food, deleteFood }) {
  const { id, name, calories, image, servings } = food;

  return (
    <div>
      <p key={id}>{name}</p>

      <img src={image} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button
        onClick={() => {
          deleteFood(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
