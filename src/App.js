import { Button, Divider, Image, Row } from 'antd';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [showHideFormToggle, setShowHideFormToggle] = useState(false);

  const addNewFood = (food) => {
    setAllFoods([food, ...allFoods]);
  };

  const searchFood = (searchQuery) => {
    setAllFoods(
      allFoods.filter((v) => {
        const name = v.name.toLowerCase();
        return name.includes(searchQuery.toLowerCase());
      })
    );
  };

  const deleteFood = (food) => {
    setAllFoods(
      allFoods.filter((v) => {
        return v !== food;
      })
    );
  };

  return (
    <div>
      {showHideFormToggle && (
        <Row
          style={{ width: '100%', justifyContent: 'center', padding: '32px' }}
        >
          <AddFoodForm addNewFood={addNewFood} />
        </Row>
      )}

      <Button
        onClick={() => {
          setShowHideFormToggle(!showHideFormToggle);
        }}
      >
        {showHideFormToggle ? 'Hide Form' : 'Add New Food'}
      </Button>

      <Row style={{ width: '100%', padding: '32px' }}>
        <Search searchFood={searchFood} />
      </Row>

      <Divider>Foot List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map((f, i) => {
          return <FoodBox key={i} food={f} deleteFood={deleteFood} />;
        })}
        {allFoods.length === 0 && (
          <div>
            <p>Oops! There is no more content to show.</p>
            <Image
              alt="food"
              src="https://images.unsplash.com/photo-1598620617137-2ab990aadd37?w=1170&q=80"
            />
          </div>
        )}
      </Row>
    </div>
  );
}

export default App;
