let app = angular
	.module('angularMeteorDemo', []);

app.controller('MainCtrl', MainCtrlFn);	

function MainCtrlFn($scope) {
	$scope.foobar = 'bazington';
}