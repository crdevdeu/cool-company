import * as faunadb from 'faunadb';
const q = faunadb.query;

export class FaunaDb {
  public client;
  public q;

  constructor(secret: string) {
    this.client = new faunadb.Client({ secret });
    this.q = q;
  }
}
