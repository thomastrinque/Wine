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

    setTimeout(() => {
    	let i = 0;
    	this.markets.forEach( (element) => {
    		let latLon = element.position.split(', ')   		

        L.marker([ latLon[0], latLon[1] ]).addTo(this.map)
        .bindPopup("<b>Hello world!</b><br />Market bla.");

        i++;
        
      });
    }, 4000);
  })


  this.popup = (id) => {

  }



  this.displayOwnerWines = (id, cssId) => {
    this.searchOwner = id;
    this.research = "";
    $(".active").removeClass("active");
    $("#" + cssId).addClass("active");
  }


  this.displayMap = () => {
    this.map = L.map('mapLarge').setView([44.834554, -0.572493], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 18,
     id: 'mapbox.streets',
     accessToken: 'pk.eyJ1IjoicGF2aWx1ZiIsImEiOiJjaXo4bngzZWUwMDF4MzJueHptM2dreGk0In0.FR5n0QVBYV9_5jbpxq2TJA'
   }).addTo(this.map);



		//L.marker([44.83457, -0.58]).addTo(map)
		//.bindPopup("<b>Hello world!</b><br />Market bla.").openPopup();
	}

	this.displayMap();

	this.viewshop = false;
	this.affichage = 'owner';


  this.viewerowner = () => {
    if(this.affichage === 'shops') {
    	this.viewshop = true;
    } else {
      this.viewshop = false;
    }
  }

  this.search = () => {
    if ((this.research === undefined) || (this.research === "")) {
      return this.searchOwner;
    }
    else {
      return this.research;
    }
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