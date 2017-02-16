'use strict'
class Owner {

  constructor(json){
    this.id = json._id;
    this.lastname = json.lastname;
    this.firstname = json.firstname;
    this.email = json.email;
}

}