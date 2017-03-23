(function(){
		"use strict"
	angular
		.module("coreModule")
		.config(Config);

		Config.$inject = ['$stateProvider', '$urlRouterProvider'];	
		function Config($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/home");
			$stateProvider
				.state("main", {
					abstract : true,
					views : {
						"head" : {
							templateUrl : "app/components/core/view.head.html"	
						}
						
					}
				})
				.state("main.home", {
					url : "/home",
					views : {
						"content@" : {
							templateUrl : "app/components/core/view.home.html"
						}
					}
				})
				.state("main.about", {
					url : "/about",
					views : {
						"content@" : {
							templateUrl : "app/components/core/view.about.html"
						}
					} 
				})



		}


})();