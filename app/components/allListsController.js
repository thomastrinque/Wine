angular.module("allLists").controller("allListsController", ["$http", "$scope", function allListController($http, $scope) {
  let WinesCollection;
  let OwnersCollection;
  let MarketsCollection;

  $http.get("http://wine.wildcodeschool.fr/api/v1/wines").then((response) => {
    WinesCollection = new Wines(response.data)
    this.wines = WinesCollection.data;
  })

  $http.get("http://wine.wildcodeschool.fr/api/v1/owners").then((response) => {
    OwnersCollection = new Owners(response.data)
    this.owners = OwnersCollection.data;
  })

  $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
    MarketsCollection = new Markets(response.data)
    this.markets = MarketsCollection.data;
  })


  this.displayOwnerWines = (id) => {
    console.log(id);
  }




  /*this.reset = () => {
    this.student = undefined
  }




  this.add = () => {
    if (this.student.id) {
      let stuId= this.student.id;
      this.students[this.stu.data.findIndex((element) => {
        if (Number(element.id) === stuId) {
          return true;
        } else {
          return false;
        };})] = this.student;
      


    }
    else if (!this.student.id) {
      let student = new Student(this.student);
      student.id = ++this.stu.lastId;
      this.stu.data.push(student);
      console.log(student.id);
      console.log(fzafa)


    }
    console.log(this.stu);
    console.log(this.percentMen);
    this.stu.refreshPercents();
    this.average= this.stu.getMiddleAge();
    this.percentMen= this.stu.percentMen ;
    this.percentWomen= this.stu.percentWomen;
    this.longest= this.stu.getLongestName();
    
    console.log(this.stu.getMiddleAge());
  }

  this.edit = (stuId) => {
    this.student = this.students[this.stu.data.findIndex((element) => {
      if (Number(element.id) === stuId) {
        return true;
      } else {
        return false;
      };})];


  }


  this.delet = function(stuId) {

    studentsCollection.data.splice(studentsCollection.data.findIndex((element) => {
      if (Number(element.id) === stuId) {
        return true;
      } else {
        return false;
      }
      ;}), 1)
    console.log(stuId);
    console.log(studentsCollection.data);
  } */
}])