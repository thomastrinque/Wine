'use strict'
angular.module("studentList").component("studentAverages", {
	bindings:{
		average:"<",
		longest:"<",
		percentMen:"<",
		percentWomen:"<"
	},
	templateUrl: "/app/components/studentList/studentAverages.html"
})