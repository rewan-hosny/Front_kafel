export class AcceptedOffer {


    id: number = 0;
    offersId: number = 0;
      offers: Offer = new Offer();
 



}
export class Offer {
  id: number = 0;
  description: string = '';
  price: string = '';
  freelanceId: number = 0;
  projectId: number = 0;

 project: Project = new Project();

 freelance: Freelance = new Freelance();
  
}

export class Freelance {
  id: number = 0;
  skills: string = '';
  walit: any = null;
  portifolio: string = '';

  // Add the Person property with its corresponding type
  person: Person = new Person();
}
export class Person {
      id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  imageUrl: string = '';
}
export class Project{
   id: number = 0;
  description: string = '';
  fromPrice: number = 0;
toPrice: number = 0;
  dueDate : string = '';
  statues: number = 0;
  categoryId : number = 0;
  category: {
    name: string;
  }| null = null; 

 
 person: Person = new Person();
}