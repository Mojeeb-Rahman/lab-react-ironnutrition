import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ addNewFood }) {
  const [food, setFood] = useState({
    name: '',
    image: '',
    calories: 1,
    servings: 1,
  });

  const handleFormChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFood({ ...food, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addNewFood(food);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={food.name}
        name="name"
        type="text"
        onChange={handleFormChange}
      />

      <label>Image</label>
      <Input
        value={food.image}
        type="text"
        name="image"
        onChange={handleFormChange}
        placeholder="https://unsplash.com/photos/kcA-c3f_3FE"
      />

      <label>Calories</label>
      <Input
        value={food.calories}
        name="calories"
        type="number"
        onChange={handleFormChange}
      />

      <label>Servings</label>
      <Input
        value={food.servings}
        name="servings"
        type="number"
        onChange={handleFormChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
