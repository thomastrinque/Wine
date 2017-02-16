'use strict'
class Student {

  constructor(json){
    this.lastname = json.lastname.toUpperCase();
    this.firstname = json.firstname;
    this.age = json.age;
    this.gender = json.gender;
    this.address = json.address;
    this.id = json.id;
    
  }

  fullname () {
    return this.firstname + " " + this.lastname;
  }
}