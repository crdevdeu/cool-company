/**
 * Interface for the 'Todos' data
 */
export interface TodosEntity {
  id: string; // Primary ID
  name: string;
  description: string;
  task: {
    id: string;
    name: string;
    description: string;
  };
}
