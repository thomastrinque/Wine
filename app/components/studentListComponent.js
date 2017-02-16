'use strict'
angular.module("studentList").component("studentList", {
	bindings:{
		average:"=",
		longest:"=",
		percentMen:"=",
		percentWomen:"="
	},
	templateUrl: "/app/components/studentList/studentListTemplate.html",
	controller: "studentListController"
})