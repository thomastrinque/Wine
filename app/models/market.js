'use strict'
class Market {

	constructor(json){
		this.id = json._id;
		this.name = json.name;
		this.position = json.position;
		this.description = json.description;
		this.products = json.products;
	}

}