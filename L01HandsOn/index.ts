interface Person {
  firstName: string;
  lastName?: string;
}
interface Contact {
  phoneNumber: number;
  email?: string;
}


class ContactCard implements Person, Contact {
  firstName: string;
  phoneNumber: number;

  constructor(firstName: string, phoneNumber: number){
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
  }
  sendMessage(): void{
    console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber );
  }

}

const newPerson = new ContactCard("Henry", 1234567890);
newPerson.sendMessage();