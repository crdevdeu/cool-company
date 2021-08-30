import * as express from 'express';
import * as cors from 'cors';
import { FaunaDb } from './app/utils/db/fauna-db';
import { environment } from './environments/environment';

const { dbHost, dbSecret } = environment;

const app = express();
app.use(cors());
app.use(express.json());
const FaunaDbInstance = new FaunaDb(dbSecret, dbHost);

app.get('/api/todos', (_req, res) => {
  FaunaDbInstance.getCollection('todos')
    .then((todos) => {
      res.send(todos.data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post('/api/todos', (req, res) => {
  FaunaDbInstance.createDocument('todos', req.body)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.delete('/api/todos/:id', (req, res) => {
  FaunaDbInstance.deleteDocument('todos', req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('/api/todos/:id', (req, res) => {
  FaunaDbInstance.getDocumentById('todos', req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.patch('/api/todos/:id', (req, res) => {
  FaunaDbInstance.updateDocument('todos', req.params.id, req.body)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
