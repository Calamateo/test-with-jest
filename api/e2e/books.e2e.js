const request = require('supertest');

const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');
const { generateManyBook } = require('../src/fakes/book.fake');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
  });

  afterEach(async () => {
    await database.dropDatabase();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Harry Potter and the philosophers stone',
          year: 1996,
          author: 'J. K. Rowling',
        },
        {
          name: 'Harry Potter and the chamber of secrets',
          year: 1998,
          author: 'J. K. Rowling',
        },
      ]);
      console.log(seedData);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          console.log(body.length);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });

  describe('Test for anyway', () => {
    test('should ', async () => {
      const seedData = await database.collection('books').insertMany(generateManyBook(7));
      console.log(seedData);
      console.log(seedData.insertedIds[2]);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // eslint-disable-next-line no-underscore-dangle
          expect(body[2]._id).toEqual(seedData.insertedIds[2]);
        });
    });
  });
});
