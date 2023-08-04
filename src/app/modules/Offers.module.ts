export class Offer {
  id: number = 0;
  description: string = '';
  price: string = '';
  freelanceId: number = 0;
  projectId: number = 0;
  project: any = null;

  // Add the Freelance property with its corresponding type
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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  imageUrl: string = '';
}