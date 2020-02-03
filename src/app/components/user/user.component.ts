import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() {
    console.log("Constructor ran");
  }

  ngOnInit() {
    console.log("ng on Init ran");
    this.name = "Indira";
    this.age = 30;
    this.email = "indira@gmail.com";
    this.address = {
      street: "100 stratsford lakes dr",
      city: "Durham",
      state: "NC"
    };
    this.hobbies = ["singing","dancing"];
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby.value);
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  onClick() {
    // this.name = 'Priya';
    // this.hobbies.push('Yes');
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
