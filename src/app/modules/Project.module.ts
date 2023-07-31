export class Project{
   id: number = 0;
  description: string = '';
  fromPrice: number = 0;
toPrice: number = 0;
  dueDate : string = '';
  statues: string = '';
  categoryId : number = 0;
  category: {
    name: string;
  }| null = null; 

  person: {
    firstName: string;
    lastName: string;
  } | null = null; // Initialize to null

}
