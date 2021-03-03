import express from 'express';
import cors from 'cors';
import * as config from './config';

const app = express();
app.use(cors())

app.get('/api/orders', (req, res,) => {
  return res.json(config.ORDERS);
});

app.post('/api/page-view', (req, res) => {
  console.log('bonus -- store the page view data');
  return res.send();
});

app.listen(config.PORT);