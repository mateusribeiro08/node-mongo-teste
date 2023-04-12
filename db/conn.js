const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect("mongodb+srv://mateusribeiroviana0:vUA2jEEKhqOSjW8c@cluster0.xrqu8zv.mongodb.net/?retryWrites=true&w=majority")
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main