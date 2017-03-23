(function(){
	"use strict"
	angular
		.module("movieModule")
		.controller("MovieCtrl", MovieCtrl);

		MovieCtrl.$inject = ['movieList', 'movieService', '$scope', '$location'];
		 function MovieCtrl(movieList, movieService, $scope, $location){
		 	var mc = this;
		 	mc.movieList = movieList.results;
		 	mc.numberOfMovies = movieList.count;
		 	mc.next ="Next >";
		 	mc.prev = "< Prev";
		 	mc.page = 1;
		 	mc.pageSize = 5;
		
		 	mc.sortDirection = "desc";
		 	mc.sortCrit = "rating"

		 	
		 	mc.changePage =function(param){

		 		mc.numOfPages = Math.ceil(mc.numberOfMovies/mc.pageSize); 
		 		if(mc.page == 1 && param == -1){
		 			mc.page = 1
		 		}else if(mc.page == mc.numOfPages && param == 1){
		 			mc.page = mc.numOfPages
		 		}else {
		 			mc.page += param;
		 		}
		 		
		 		getMovies();
		 	}

		 	$scope.$watch('mc.sortCrit', function(oldVal, newVal){
		 		if(newVal != oldVal){
		 			mc.sortDirection = "asc";
		 			getMovies();
		 		}
		 	});

		 	mc.loadMovie = function(id){
		 		
		 		$location.path("/movie/" + id)
		 	}


		 	function getMovies(){

		 		movieService.get({
		 			page : mc.page,
		 			pageSize : mc.pageSize,
		 			sort : mc.sortCrit,
		 			sortDirection : mc.sortDirection
		 		}).$promise.then(function(data){
			 		mc.movieList = data.results;	
		 		});
		 	}	 	
		 }



})();