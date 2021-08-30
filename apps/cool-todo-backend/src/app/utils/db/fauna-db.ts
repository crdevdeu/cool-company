import * as faunadb from 'faunadb';
const q = faunadb.query;

export class FaunaDb {
  public client;
  public q;

  constructor(secret: string, domain: string) {
    this.client = new faunadb.Client({ secret, domain });
    this.q = q;
  }

  public getCollection(collectionName: string) {
    return this.client.query(
      this.q.If(
        this.q.Exists(this.q.Collection(collectionName)),
        this.q.Map(
          this.q.Paginate(this.q.Documents(this.q.Collection(collectionName)), {
            size: 100,
          }),
          this.q.Lambda('ref', this.q.Get(this.q.Var('ref')))
        ),
        this.q.CreateCollection({ name: collectionName })
      )
    );
  }

  public createDocument(collectionName: string, data: unknown) {
    return this.client.query(
      this.q.Create(this.q.Collection(collectionName), { data })
    );
  }

  public getDocumentById(collectionName: string, id: string) {
    return this.client.query(
      this.q.Get(this.q.Ref(this.q.Collection(collectionName), id))
    );
  }

  public deleteDocument(collectionName: string, id: string) {
    return this.client.query(
      this.q.Delete(this.q.Ref(this.q.Collection(collectionName), id))
    );
  }

  public updateDocument(collectionName: string, id: string, data: unknown) {
    return this.client.query(
      this.q.Update(this.q.Ref(this.q.Collection(collectionName), id), { data })
    );
  }
}
