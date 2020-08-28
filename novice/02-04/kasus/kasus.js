// Get data using async/await

const axios = require("axios").default;

const getdata = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;
  console.log(data);
};

getdata();
