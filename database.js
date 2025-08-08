
const { MongoClient } = require('mongodb')

const url = "mongodb+srv://subhashisbhanjdeo:9YowP5ahnBYH3CYE@namastenodejs.gvqibh9.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());