'use strict'
class Markets {

	constructor(marketsJSON) {
		this.data = [];

    marketsJSON/*.sort((cur, next) => {
      return cur.id - next.id;
  })*/.forEach((mJSON) => {
  	let market = new Market(mJSON);
  	this.data.push(market);
  })

}
}