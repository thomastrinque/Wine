'use strict'
class Owners {

	constructor(ownersJSON) {
		this.data = [];

    ownersJSON/*.sort((cur, next) => {
      return cur.id - next.id;
  })*/.forEach((oJSON) => {
  	let owner = new Owner(oJSON);
  	this.data.push(owner);
  })

}
}