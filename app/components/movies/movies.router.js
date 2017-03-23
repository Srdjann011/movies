(function(){
	"use strict"
	angular
		.module("movieModule")
		.config(Config);
		Config.$inject = ['$stateProvider'];
		function Config($stateProvider){
			$stateProvider
				.state("main.movies", {
					url : "/movies",
					views : {
						"content@" : {
							templateUrl : "app/components/movies/view.movieList.html",
							controller : "MovieCtrl",
							controllerAs : "mc",
							resolve: {
								movieList : getMovieList
							}
						}
					}
				})
				.state("main.movie", {
					url :"/movie/:id",
					views : {
						"content@" : {
							templateUrl : "app/components/movies/view.movie.html",
							controller : 'movCtrl',
							controllerAs : "smc", 
							resolve	: {
								selectedmovie : getMovie 
							}	


						}
					}
				});

			function getMovieList(movieService){

				var params = {
					page : 1,
					pageSize : 5,
					sort : 'rating',
					sortDirection : "desc"
				}


				return movieService.get(params).$promise;
			}
			function getMovie ($stateParams, movieService){
				return movieService.get({id : $stateParams.id }).$promise;	
			}

		}

		


})();
