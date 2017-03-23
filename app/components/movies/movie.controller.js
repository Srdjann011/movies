(function(){
	"use strict"
	angular
		.module("movieModule")
		.controller("movCtrl", movCtrl);
		
		movCtrl.$inject = ['selectedmovie', '$location', 'movieService'];	
		function movCtrl(selectedmovie, $location, movieService){
			var smc = this;
			smc.selectedmovie = selectedmovie
			console.log(smc.selectedmovie);

			smc.saveChanges = function(){

				if(smc.selectedmovie._id){
					smc.selectedmovie.$update().$promise;
					$location.path("/movies")
				}else{
					movieService.save(smc.selectedmovie).$promise.then(redirect);
				}
			function redirect(){
				alert("New movie added!")
				$location.path("/movies")
			}



			}
			smc.newMovie = function(){
				smc.selectedmovie = {};

			}

		

		}


})();