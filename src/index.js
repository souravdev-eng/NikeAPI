const express = require('express');
require('dotenv').config({ path: '.env' });
const productRoutes = require('./router/productRoutes');
const orderRoutes = require('./router/orderRoutes');
const paymentRoutes = require('./router/paymentRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`App is running in PORT --> ${PORT}`);
});
