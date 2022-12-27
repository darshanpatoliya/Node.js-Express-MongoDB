const mongoose = require('mongoose');
//Here we created a schema: just to make sure the documents or data should have these requirements fulfilled
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

//created a model(Tour)
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
