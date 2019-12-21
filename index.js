import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// body-parset setup
app.set(bodyParser.urlencoded({ extended: true }));
app.set(bodyParser.json());

// this is routeing
routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`Node & express run at port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running at port ${PORT}`);
});
