'use strict'
class Wine {

  constructor(json){
    this.id = json._id;
    this.name = json.name;
    this.description = json.description;
    this.picture = json.picture;
    this.ownerId = json.owner.id;
    this.ownerLastname = json.owner.lastname;
    this.ownerfirstname = json.owner.firstname;
    this.ownerEmail = json.owner.email;
    
  }

}