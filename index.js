const express = require('express')
const cors = require('cors')
const { pets } = require('./mock_data/pets')

const app = express()

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/v1/pets', (req, res) => {
  try {
    const petsList = pets;
    console.log("PETS: ", petsList);

    res.status(200).json({
      "pets": petsList
    })
  } catch (error) {
    res.status(400).json({
      "error": error.message
    })
  }
})

app.get('/api/v1/pets/:id', (req, res) => {
  try {
    const { id } = req.params;
    console.log("PARAMS: ", id);

    const petsList = pets;

    const found = petsList.find( (pet) => {
      return pet.id === Number(id);
    })
    console.log("PETS: ", found);

    res.status(200).json({
      "pet": found
    })
  } catch (error) {
    res.status(400).json({
      "error": error.message
    })
  }
})

app.listen(4000, () => {
  console.log("Server is running on port 4000")
})