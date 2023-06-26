const { MongoClient } = require('mongodb');

let client;

const getDB = () => {
  if (!client) {
    console.log('Creating a new client!');
    client = new MongoClient(process.env.DB_URL);
  } else {
    console.log('Reusing the old client');
  }

  const database = client.db('nike');
  const products = database.collection('products');
  const orders = database.collection('orders');

  return {
    products,
    orders,
  };
};

module.exports = getDB;
