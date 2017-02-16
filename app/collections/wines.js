'use strict'
class Wines {

  constructor(winesJSON) {
    this.data = [];

    winesJSON/*.sort((cur, next) => {
      return cur.id - next.id;
    })*/.forEach((wJSON) => {
      let wine = new Wine(wJSON);
      this.data.push(wine);
    })

  }
}
