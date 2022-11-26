import { Divider, Input } from 'antd';

// Iteration 5
function Search({ searchFood }) {
  const hundleSearchChange = (event) => {
    searchFood(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={hundleSearchChange} />
    </>
  );
}

export default Search;
