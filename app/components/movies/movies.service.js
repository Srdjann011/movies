(function(){
		"use strict"
	angular
		.module("movieModule")
		.factory("movieService", movieService);

		movieService.$inject = ['$resource'];
		 function movieService($resource){

		 	var url ="http://localhost:3000/api/movies/:id";

		 	 return $resource(url, {id : "@_id"}, {update : {method :"PUT"}});
		 }


})();