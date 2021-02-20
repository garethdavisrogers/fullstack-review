const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/review', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

mongoose.connection.on('error', console.log.bind(console, 'error'))
mongoose.connection.on('open', () => {
  console.log('Connected to mongodb-review');
})



const peopleSchema = new mongoose.Schema({
  first_name: {unique: true, type: String},
  last_name: String,
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;
