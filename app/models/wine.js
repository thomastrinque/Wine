'use strict'
class Wine {

  constructor(json){
    this.id = json._id;
    this.name = json.name;
    this.description = json.description;
    this.picture = json.picture;
    this.owner = json.owner;

    
  }

}