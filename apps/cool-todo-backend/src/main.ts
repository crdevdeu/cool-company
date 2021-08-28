/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { FaunaDb } from './app/utils/db/fauna-db';
import { environment } from './environments/environment';

const { dbHost, dbSecret } = environment;

const app = express();
const FaunaDbInstance = new FaunaDb(dbSecret, dbHost);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to cool-todo-backend!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
