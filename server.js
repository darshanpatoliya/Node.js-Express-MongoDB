const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

//Here, we are replacing the PASSWORD in the conection string with the actual password we have in our config file
const DB = process.env.DATABASE_ATLAS.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD_OF_ATLAS_MONGO
);

//here we connect to the database(atlas) using mongoose driver
mongoose
  .connect(DB, {
    //To avoid deprecation warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection succeeded'));

//Start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on ${port}...`);
});
