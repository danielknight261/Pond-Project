const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://admin:admin1234@cluster0.stzluip.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db('picturepond');
};

module.exports = connectDB;
