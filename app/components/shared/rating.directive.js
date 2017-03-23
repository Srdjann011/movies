(function(){
		"use strict"

	angular
		.module('ratingModule')
		.directive("ratingDirective", ratingDirective)


		function ratingDirective (){
			return {
				restrict : "E",
				template : "{{ratings}}<img src='assets/img/gold_star.png'>",
				scope : {
					ratings : "=" 
				}
			}
		}

})();