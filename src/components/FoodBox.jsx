import { Button, Card, Col, Image } from 'antd';

const FoodBox = ({ food, deleteFood }) => {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <Image height={60} alt="food" src={food.image} />
        <p>
          <strong>Calories:</strong> {food.calories}
        </p>
        <p>
          <strong>Servings:</strong> {food.servings}
        </p>
        <p>
          <strong>Total Calories: {food.servings * food.calories}</strong> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
